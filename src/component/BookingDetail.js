import React, { useState, useEffect } from "react";
import { SERVICE_PRICES, computeSelectedServicesTotal, selectedServicesBreakdown, formatGBP } from '../pricing';
import { BsTelephoneFill } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import "../css/BookingDetail.css";


const BookingDetail = () => {

    const STORAGE_KEY = 'bookingDraft_v1';
        // SERVICE_PRICES imported from centralized pricing.js

    const [formData, setFormData] = useState({
        mobileNumber: "",
        email: "",
        pets: [ { petName: "", petBreed: "", petAge: "" } ],
        isInsured: "",
        services: { walking: false, weeklyWalking: false, boarding: false, catVisit:false },
        address: "",
        date: "",
        time: "",
        notes: "",
        content: ""
    });

    const [step, setStep] = useState(0);
    const [errors, setErrors] = useState({});
    const [sent, setSent] = useState(false);
    const steps = ["Pet", "Service", "Schedule", "Contact", "Review"];

    // Load draft once
    useEffect(()=>{
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if(raw){
                const parsed = JSON.parse(raw);
                setFormData(prev=>({...prev, ...parsed}));
            }
        } catch(_) { /* ignore */ }
    },[]);

    // Persist draft (exclude content + sent flag)
    useEffect(()=>{
        const { content, ...rest } = formData;
        try { localStorage.setItem(STORAGE_KEY, JSON.stringify(rest)); } catch(_) {}
    },[formData]);

    const handleChange = (e, petIndex=null, petField=null) => {
        if(petIndex!==null && petField){
            const value = e.target.value;
            setFormData(prev=>{
                const pets = prev.pets.map((p,i)=> i===petIndex ? { ...p, [petField]: value } : p);
                return { ...prev, pets };
            });
            return;
        }
        const { name, value, type, checked } = e.target;
        if(['walking','boarding','weeklyWalking','catVisit'].includes(name)){
            setFormData(prev => ({ ...prev, services: { ...prev.services, [name]: checked } }));
        } else {
            setFormData(prev => ({ ...prev, [name]: type === 'radio' ? value : value }));
        }
    };

    const addPet = ()=> setFormData(prev=> ({ ...prev, pets:[ ...prev.pets, { petName:"", petBreed:"", petAge:"" } ] }));
    const removePet = (idx)=> setFormData(prev=> ({ ...prev, pets: prev.pets.filter((_,i)=>i!==idx) }));

    const validateStep = (s = step) => {
        const errs = {};
        if (s === 0) { // Pets
            formData.pets.forEach((p,i)=>{
                if(!p.petName.trim()) errs[`petName_${i}`]='Required';
                if(!p.petBreed.trim()) errs[`petBreed_${i}`]='Required';
            });
            if (!formData.isInsured) errs.isInsured = 'Select one';
        }
        if (s === 1) { // Service
            if (!formData.services.walking && !formData.services.weeklyWalking && !formData.services.boarding && !formData.services.catVisit) errs.services = 'Select at least one';
        }
        if (s === 2) { // Schedule
            if (!formData.date) errs.date = 'Date required';
            if (!formData.time) errs.time = 'Time required';
        }
        if (s === 3) { // Contact
            if (!formData.mobileNumber.trim()) errs.mobileNumber = 'Required';
            if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) errs.email = 'Valid email required';
            if (!formData.address.trim()) errs.address = 'Required';
        }
        setErrors(errs);
        return Object.keys(errs).length === 0;
    };

    const next = () => { if (validateStep()) setStep(s => s + 1); };
    const back = () => setStep(s => Math.max(0, s - 1));
    
    const clearDraft = () => {
        localStorage.removeItem(STORAGE_KEY);
        setFormData({
            mobileNumber: "",
            email: "",
            pets: [ { petName: "", petBreed: "", petAge: "" } ],
            isInsured: "",
            services: { walking: false, weeklyWalking: false, boarding: false, catVisit:false },
            address: "",
            date: "",
            time: "",
            notes: "",
            content: ""
        });
        setStep(0); setErrors({}); setSent(false);
    };

    const buildSummary = () => {
        const selectedServices = selectedServicesBreakdown(formData.services).map(s=>`${s.label} (${formatGBP(s.price)})`).join(', ');
        const petsBlock = formData.pets.map((p,i)=> `Pet #${i+1}: ${p.petName} | ${p.petBreed}${p.petAge?` | Age: ${p.petAge}`:''}`).join('\n');
        const breakdownRows = selectedServicesBreakdown(formData.services).map(r=> `${r.label}: ${formatGBP(r.price)}`);
        let discountLine = '';
        if(formData.services.weeklyWalking){
            const singleEquivalent = SERVICE_PRICES.WALKING * 5;
            const saving = singleEquivalent - SERVICE_PRICES.WEEKLY_WALKING;
            if(saving>0){
                const pct = Math.round((saving / singleEquivalent)*100);
                discountLine = `Weekly plan savings vs 5 single walks: ${formatGBP(saving)} (${pct}%)`;
            }
        }
        const total = computeSelectedServicesTotal(formData.services);
        return `${petsBlock}\nInsured: ${formData.isInsured}\nServices: ${selectedServices}\n${breakdownRows.join('\n')}${discountLine?'\n'+discountLine:''}\nEstimated total: ${total?formatGBP(total):'—'}\nDate: ${formData.date}\nTime: ${formData.time}\nAddress: ${formData.address}\nMobile: ${formData.mobileNumber}\nEmail: ${formData.email}\nNotes: ${formData.notes}`;
    };

    const goReview = () => { if (validateStep()) { const body = buildSummary(); setFormData(prev => ({ ...prev, content: body })); setStep(4); } };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateStep(3)) { setStep(3); return; }
        const body = buildSummary();
        const subject = `Booking: ${formData.petName || 'Pet'}`;
        window.location.href = `mailto:cambridgedogwalker@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        setFormData(prev => ({ ...prev, content: body }));
        setStep(4);
        setSent(true);
        setTimeout(()=>setSent(false), 4000);
    };

    const progress = (step / (steps.length - 1)) * 100;
    const selectedServices = Object.entries(formData.services).filter(([_,v])=>v).map(([k])=>k);
    const estimatedTotal = computeSelectedServicesTotal(formData.services);
    const breakdown = selectedServicesBreakdown(formData.services);
    const weeklySaving = formData.services.weeklyWalking ? (SERVICE_PRICES.WALKING*5 - SERVICE_PRICES.WEEKLY_WALKING) : 0;

    return (
        <section className="bookingShell">
            <header className="bookingHero">
                <h2 className="bookingTitle">Book a Walk or Boarding</h2>
                <p className="bookingLead">Fast response. Fully insured & one-to-one care. Five quick steps.</p>
                <div className="bookingStepper" aria-label="Progress">
                    <div className="bookingStepperBar" style={{'--progress': progress + '%'}} />
                    <ol className="bookingStepperList">
                        {steps.map((label, i) => (
                            <li key={label} className={i === step ? 'active' : i < step ? 'done' : ''}>
                                <span className="dot" aria-hidden="true" />
                                <span className="lbl">{label}</span>
                            </li>
                        ))}
                    </ol>
                </div>
            </header>
            <form className="bookingForm" onSubmit={handleSubmit} noValidate>
                {step === 0 && (
                    <div className="stepFade">
                        {formData.pets.map((p,i)=>(
                            <div key={i} className="petCard formGrid" style={{marginBottom:'1rem', position:'relative'}}>
                                <div className="formRow">
                                    <label>Pet Name *</label>
                                    <input value={p.petName} onChange={(e)=>handleChange(e,i,'petName')} aria-invalid={!!errors[`petName_${i}`]} />
                                    {errors[`petName_${i}`] && <div className='inlineValidation'>{errors[`petName_${i}`]}</div>}
                                </div>
                                <div className="formRow">
                                    <fieldset className="formFieldset" style={{margin:0}}>
                                        <legend>Pet Category *</legend>
                                        <div style={{display:'flex',gap:12,alignItems:'center',flexWrap:'wrap'}}>
                                            <label className='opt'><input type='radio' name={`petCategory_${i}`} value='Dog' checked={p.petBreed==='Dog'} onChange={(e)=>handleChange(e,i,'petBreed')} /> Dog</label>
                                            <label className='opt'><input type='radio' name={`petCategory_${i}`} value='Cat' checked={p.petBreed==='Cat'} onChange={(e)=>handleChange(e,i,'petBreed')} /> Cat</label>
                                        </div>
                                        {errors[`petBreed_${i}`] && <div className='inlineValidation'>{errors[`petBreed_${i}`]}</div>}
                                    </fieldset>
                                </div>
                                <div className="formRow">
                                    <label>Age</label>
                                    <input value={p.petAge} onChange={(e)=>handleChange(e,i,'petAge')} />
                                </div>
                                {i === 0 && (
                                    <fieldset className="formFieldset" style={{marginTop:8}}>
                                        <legend>Has insurance *</legend>
                                        <label className='opt'><input type='radio' name='isInsured' value='Yes' checked={formData.isInsured==='Yes'} onChange={handleChange}/> Yes</label>
                                        <label className='opt'><input type='radio' name='isInsured' value='No' checked={formData.isInsured==='No'} onChange={handleChange}/> No</label>
                                        {errors.isInsured && <div className='inlineValidation'>{errors.isInsured}</div>}
                                    </fieldset>
                                )}
                                {formData.pets.length>1 && <button type='button' className='miniRemoveBtn' onClick={()=>removePet(i)} aria-label={`Remove pet ${i+1}`}>×</button>}
                            </div>
                        ))}
                        <button type='button' className='secondaryBtn smallBtn' onClick={addPet}>Add Another Pet</button>
                    </div>
                )}
                {step === 1 && (
                    <div className="stepFade">
                        {/* Insurance moved to Pet step (step 0) and shown next to Age for better UX */}
                        <fieldset className="formFieldset">
                            <legend>Services *</legend>
                            <label className='opt'><input type='checkbox' name='walking' checked={formData.services.walking} onChange={handleChange} disabled={formData.services.weeklyWalking}/> Walking <span className='priceHint'>{formatGBP(SERVICE_PRICES.WALKING)}</span></label>
                            <label className='opt'><input type='checkbox' name='weeklyWalking' checked={formData.services.weeklyWalking} onChange={handleChange}/> Weekly plan <span className='priceHint'>{formatGBP(SERVICE_PRICES.WEEKLY_WALKING)}</span></label>
                            <label className='opt'><input type='checkbox' name='boarding' checked={formData.services.boarding} onChange={handleChange}/> Boarding <span className='priceHint'>{formatGBP(SERVICE_PRICES.BOARDING)}</span></label>
                            <label className='opt'><input type='checkbox' name='catVisit' checked={formData.services.catVisit} onChange={handleChange}/> Cat / Small Pet Visit <span className='priceHint'>{formatGBP(SERVICE_PRICES.CAT_VISIT)}</span></label>
                            {errors.services && <div className='inlineValidation'>{errors.services}</div>}
                            <div className='estTotal'>Estimated total: <strong>{estimatedTotal ? formatGBP(estimatedTotal) : '—'}</strong>{formData.services.weeklyWalking && (SERVICE_PRICES.WALKING*5 - SERVICE_PRICES.WEEKLY_WALKING)>0 && <span className='savingNote'> You save {formatGBP(SERVICE_PRICES.WALKING*5 - SERVICE_PRICES.WEEKLY_WALKING)}</span>}</div>
                        </fieldset>
                    </div>
                )}
                {step === 2 && (
                    <div className="stepFade">
                        <div className="formGrid">
                            <div className="formRow">
                                <label htmlFor='date'>Date *</label>
                                <input type='date' name='date' value={formData.date} onChange={handleChange} aria-invalid={!!errors.date} />
                                {errors.date && <div className='inlineValidation'>{errors.date}</div>}
                            </div>
                            <div className="formRow">
                                <label htmlFor='time'>Time *</label>
                                <input type='time' name='time' value={formData.time} onChange={handleChange} aria-invalid={!!errors.time} />
                                {errors.time && <div className='inlineValidation'>{errors.time}</div>}
                            </div>
                        </div>
                        <div className="formRow">
                            <label htmlFor='notes'>Notes / Behaviour / Needs</label>
                            <textarea name='notes' value={formData.notes} onChange={handleChange} placeholder='Any special instructions or behaviours to know?' rows={4} />
                        </div>
                    </div>
                )}
                {step === 3 && (
                    <div className="stepFade">
                        <div className="formRow">
                            <label htmlFor='mobileNumber'>Mobile Number *</label>
                            <input name='mobileNumber' value={formData.mobileNumber} onChange={handleChange} aria-invalid={!!errors.mobileNumber} />
                            {errors.mobileNumber && <div className='inlineValidation'>{errors.mobileNumber}</div>}
                        </div>
                        <div className="formRow">
                            <label htmlFor='email'>Email *</label>
                            <input name='email' value={formData.email} onChange={handleChange} aria-invalid={!!errors.email} />
                            {errors.email && <div className='inlineValidation'>{errors.email}</div>}
                        </div>
                        <div className="formRow">
                            <label htmlFor='address'>Pick Up Address *</label>
                            <input name='address' value={formData.address} onChange={handleChange} aria-invalid={!!errors.address} />
                            {errors.address && <div className='inlineValidation'>{errors.address}</div>}
                        </div>
                    </div>
                )}
        {step === 4 && (
            <div className='bookingPreview stepFade'>
                <h3>Review & Send</h3>
                <pre aria-live='polite'>{formData.content}</pre>
                <div className='priceBreakdownBox'>
                    <h4>Price breakdown</h4>
                    {breakdown.length? (
                        <ul>
                            {breakdown.map(r=> <li key={r.label}>{r.label}: {formatGBP(r.price)}</li>)}
                            {formData.services.weeklyWalking && (SERVICE_PRICES.WALKING*5 - SERVICE_PRICES.WEEKLY_WALKING)>0 && <li className='savingLine'>Weekly plan savings: {formatGBP(SERVICE_PRICES.WALKING*5 - SERVICE_PRICES.WEEKLY_WALKING)}</li>}
                            <li className='totalLine'>Estimated total: {estimatedTotal?formatGBP(estimatedTotal):'—'}</li>
                        </ul>
                    ) : <p style={{fontSize:'.8rem'}}>No services selected</p>}
                    <button type='button' className='secondaryBtn smallBtn' onClick={()=>{ navigator.clipboard.writeText(formData.content).then(()=>{ setSent(true); setTimeout(()=>setSent(false),2000); }); }}>Copy Summary</button>
                </div>
                <p style={{marginTop:18,fontSize:'.75rem',opacity:.75}}>Click Send to open your email client with details pre-filled.</p>
            </div>
        )}
                <div className='bookingWizardNav'>
                    {step > 0 && step < 4 && <button type='button' onClick={back} className='secondaryBtn'>Back</button>}
                    {step < 3 && <button type='button' onClick={next} className='primaryBtn wizardNext'>Next</button>}
                    {step === 3 && <button type='button' onClick={goReview} className='primaryBtn wizardNext'>Review</button>}
                    {step === 4 && <button type='submit' className='primaryBtn'>Send Booking Email</button>}
                    <button type='button' onClick={clearDraft} className='secondaryBtn clearBtn'>Clear Draft</button>
                </div>
            </form>
            {sent && <div className='bookingToast' role='status'>Ready! (Email opened or summary copied)</div>}
        </section>
    );
}
export default BookingDetail