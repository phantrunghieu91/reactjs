import { useState } from 'react';
import { Formik } from 'formik';
import './App.scss';

function App() {
  document.title = 'Health Declaration';
  const SYMPTONS = ['Fever', 'Cough', 'Dificulty breathing', 'Pneumonia', 'Sore throat', 'Tired'];
  const CONTACTED = ['Patient or suspected to have covid', 'People from countries with covid', 'People with symptoms (fever, cough, dificulty breathing, pneumonia)'];

  const GENDERS = [
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'}
  ];

  const [form, setForm] = useState({
    fullname: '',
    identifyCard: '',
    yob: '',
    gender: false,
    nationality: '',
    company: '',
    workingDepartment: '',
    healthInsurance: false,
    province: '',
    district: '',
    ward: '',
    address: '',
    phone: '',
    email: '',
    travelCountry: '',
    symptoms: new Array(SYMPTONS.length).fill(false),
    contacted: new Array(CONTACTED.length).fill(false)
  });

  const handleMultiCheckbox = (e, position) => {
    const updateCheckBoxsState = form[e.target.name].map((ele, id) => id === position ? !ele : ele);
    setForm({...form, [e.target.name]: updateCheckBoxsState});
  };

  const handleSubmit = () => {
    alert("Success!");
    setTimeout(() => {
      console.table(JSON.stringify(form, null, 2));
    }, 1000);
  };

  const handleValidate = () => {
    const errors = {};

    if(!form.fullname) errors.fullname = 'Required';
    
    if(!form.identifyCard) errors.identifyCard = 'Required';
    else if(!/^[0-9]+$/.test(form.identifyCard)) errors.identifyCard = 'Number only';
    
    if(!form.yob) errors.yob = 'Required'
    else if(!(form.yob > 1900 && /^[0-9]{4}$/.test(form.yob))) errors.yob = ' Is number and > 1900';

    if(!form.nationality) errors.nationality = 'Required';

    if(!form.province) errors.province = 'Required';

    if(!form.district) errors.district = 'Required';

    if(!form.ward) errors.ward = 'Required';

    if(!form.address) errors.address = 'Required';

    if(!form.phone) errors.phone = 'Required';
    else if(!/^[0-9]+$/.test(form.phone)) errors.phone = 'Must be number';

    if(!form.email) errors.email = 'Required';
    else if(!(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(form.email))) errors.email = 'Invalid email address';

    return errors;
  };

  const handleChange = e => {
    let value;
    if(e.target.type === 'checkbox' || e.target.type === 'radio'){
      value = !form[e.target.name];
    } else value = e.target.value;
    if(e.target.name !== 'symptoms') setForm({...form, [e.target.name]: value});
  };

  return (
    <div className="app">
      <header className='app__header'>
        <h2 className='app__header__title'>Health Declaration</h2>
      </header>
      <Formik
        initialValues={form}
        validate={handleValidate}
        onSubmit={handleSubmit}
      >
        {({errors, handleSubmit}) => (
          <form 
            className='app__form'
            onSubmit={handleSubmit}
          >
            <div className='app__form__input-groups'>
              <div className='app__form__input-groups__left'>
                <div className={`app__form__input-groups__left__custom-input ${errors.fullname ? 'error' : ''}`}>
                  <label>Fullname</label>
                  <input 
                    className='app__form__input-groups__left__custom-input__fullname'
                    name='fullname'
                    type='text'
                    value={form.fullname || ''}
                    onChange={handleChange}
                  />
                  <p className='app__form__input-groups__left__custom-input__error'>{errors.fullname}</p>
                </div>
                <div className={`app__form__input-groups__left__custom-input ${errors.identifyCard ? 'error' : ''}`}>
                  <label>Identity card/Passport</label>
                  <input 
                    className='app__form__input-groups__left__custom-input__identify-card'
                    name='identifyCard'
                    type='text'
                    value={form.identifyCard || ''}
                    onChange={handleChange}
                  />
                  <p className='app__form__input-groups__left__custom-input__error'>{errors.identifyCard}</p>
                </div>
                <div className={`app__form__input-groups__left__custom-input ${errors.yob ? 'error' : ''}`}>
                  <label>Year of Birth</label>
                  <input 
                    className='app__form__input-groups__left__custom-input__yob'
                    name='yob'
                    type='text'
                    value={form.yob || ''}
                    onChange={handleChange}
                  />
                  <p className='app__form__input-groups__left__custom-input__error'>{errors.yob}</p>
                </div>
                <div className={`app__form__input-groups__left__custom-input ${errors.gender ? 'error' : ''}`}>
                  <label>Gender
                    {
                      GENDERS.map((ele, id) => {
                        return (
                          <label key={`gender-${id}`}>
                            <input 
                              className='app__form__input-groups__left__custom-input__gender'
                              name='gender'
                              type='radio'
                              onChange={handleChange}
                              value={ele.value}
                            />{ele.label}
                          </label>
                        )
                      })
                    }
                  </label>
                  <p className='app__form__input-groups__left__custom-input__error'>{errors.gender}</p>
                </div>
                <div className={`app__form__input-groups__left__custom-input ${errors.nationality ? 'error' : ''}`}>
                  <label>Nationalitty</label>
                  <input 
                    className='app__form__input-groups__left__custom-input__nationality'
                    name='nationality'
                    type='text'
                    value={form.nationality || ''}
                    onChange={handleChange}
                  />
                  <p className='app__form__input-groups__left__custom-input__error'>{errors.nationality}</p>
                </div>
                <div className={`app__form__input-groups__left__custom-input ${errors.company ? 'error' : ''}`}>
                  <label>Company</label>
                  <input 
                    className='app__form__input-groups__left__custom-input__company'
                    name='company'
                    type='text'
                    value={form.company || ''}
                    onChange={handleChange}
                  />
                  <p className='app__form__input-groups__left__custom-input__error'>{errors.company}</p>
                </div>
                <div className={`app__form__input-groups__left__custom-input ${errors.workingDepartment ? 'error' : ''}`}>
                  <label>Working Department</label>
                  <input 
                    className='app__form__input-groups__left__custom-input__working-department'
                    name='workingDepartment'
                    type='text'
                    value={form.workingDepartment || ''}
                    onChange={handleChange}
                  />
                  <p className='app__form__input-groups__left__custom-input__error'>{errors.workingDepartment}</p>
                </div>
                <div className={`app__form__input-groups__left__custom-input ${errors.healthInsurance ? 'error' : ''}`}>
                  <label>
                    <span>Have health insurance</span>
                    <input 
                      className='app__form__input-groups__left__custom-input__health-insurance'
                      name='healthInsurance'
                      type='checkbox'
                      value={form.healthInsurance || false}
                      onChange={handleChange}
                    />
                  </label>
                </div>
                <h3 className='app__form__input-groups__address-in-vietnam'>
                  Address Info in Vietnam
                </h3>
                <div className={`app__form__input-groups__left__custom-input ${errors.province ? 'error' : ''}`}>
                  <label>Province</label>
                  <input 
                    className='app__form__input-groups__left__custom-input__province'
                    name='province'
                    type='text'
                    value={form.province || ''}
                    onChange={handleChange}
                  />
                  <p className='app__form__input-groups__left__custom-input__error'>{errors.province}</p>
                </div>
                <div className={`app__form__input-groups__left__custom-input ${errors.district ? 'error' : ''}`}>
                  <label>District</label>
                  <input 
                    className='app__form__input-groups__left__custom-input__district'
                    name='district'
                    type='text'
                    value={form.district || ''}
                    onChange={handleChange}
                  />
                  <p className='app__form__input-groups__left__custom-input__error'>{errors.district}</p>
                </div>
                <div className={`app__form__input-groups__left__custom-input ${errors.ward ? 'error' : ''}`}>
                  <label>Ward</label>
                  <input 
                    className='app__form__input-groups__left__custom-input__ward'
                    name='ward'
                    type='text'
                    value={form.ward || ''}
                    onChange={handleChange}
                  />
                  <p className='app__form__input-groups__left__custom-input__error'>{errors.ward}</p>
                </div>
                <div className={`app__form__input-groups__left__custom-input ${errors.address ? 'error' : ''}`}>
                  <label>Address</label>
                  <input 
                    className='app__form__input-groups__left__custom-input__address'
                    name='address'
                    type='text'
                    value={form.address || ''}
                    onChange={handleChange}
                  />
                  <p className='app__form__input-groups__left__custom-input__error'>{errors.address}</p>
                </div>
                <div className={`app__form__input-groups__left__custom-input ${errors.phone ? 'error' : ''}`}>
                  <label>Phone number</label>
                  <input 
                    className='app__form__input-groups__left__custom-input__phone'
                    name='phone'
                    type='text'
                    value={form.phone || ''}
                    onChange={handleChange}
                  />
                  <p className='app__form__input-groups__left__custom-input__error'>{errors.phone}</p>
                </div>
                <div className={`app__form__input-groups__left__custom-input ${errors.email ? 'error' : ''}`}>
                  <label>Email</label>
                  <input 
                    className='app__form__input-groups__left__custom-input__email'
                    name='email'
                    type='text'
                    value={form.email || ''}
                    onChange={handleChange}
                  />
                  <p className='app__form__input-groups__left__custom-input__error'>{errors.email}</p>
                </div>
              </div>
              <div className='app__form__input-groups__right'>
                <div className={`app__form__input-groups__right__custom-input`}>
                  <label style={{paddingLeft: '.5rem'}}><h4>Which country have you been to within the last 14 days ?</h4></label>
                  <input 
                    className='app__form__input-groups__right__custom-input__travel-country'
                    name='travelCountry'
                    type='text'
                    value={form.travelCountry || ''}
                    onChange={handleChange}
                  />
                </div>
                <div className={`app__form__input-groups__right__custom-input`}>
                  <label style={{paddingLeft: '.5rem'}}><h4>Do you have any of the following symptoms within the last 14 days ?</h4></label>
                  <ul className='app__form__input-groups__right__custom-input__symptoms'>
                    {
                      SYMPTONS.map((ele, id) => {
                        return (
                          <li 
                            key={`symptom-${id}`}
                            className='app__form__input-groups__right__custom-input__symptom'
                          >
                            <label>
                              <input 
                                position={id}
                                name='symptoms'
                                type='checkbox'
                                checked={form.symptoms[id]}
                                onChange={(event) => {
                                  handleMultiCheckbox(event ,id);
                                }}
                              /> {ele}
                            </label>
                          </li>
                        );
                      })
                    }
                  </ul>
                </div>
                <div className={`app__form__input-groups__right__custom-input`}>
                  <label style={{paddingLeft: '.5rem'}}><h4>Have you been contacted with anyone within the last 14 days?</h4></label>
                  <ul className='app__form__input-groups__right__custom-input__contacted'>
                    {
                      CONTACTED.map((ele, id) => {
                        return (
                          <li 
                            key={`contacted-${id}`}
                            className='app__form__input-groups__right__custom-input__contacted__item'
                          >
                            <label>
                              <input 
                                position={id}
                                name='contacted'
                                type='checkbox'
                                checked={form.contacted[id]}
                                onChange={(event) => {
                                  handleMultiCheckbox(event ,id);
                                }}
                              /> {ele}
                            </label>
                          </li>
                        );
                      })
                    }
                  </ul>
                </div>
              </div>
            </div>
            <div className='app__form__button-group'>
              <button className='app__form__button-group__submit' type='submit'>Submit</button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default App;
