import React from 'react';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';

const TextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className='text-input' {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className='error'>{meta.error}</div>
            ) : null}
        </>
    );
};

const CheckboxInput = ({ children, ...props }) => {
    const [field, meta] = useField({...props, type: 'checkbox'});
    return (
        <div>
            <label className='checkbox-input'>
                <input type='checkbox' {...field} {...props} />
                {children}
            </label>
            {meta.touched && meta.error ? (
                <div className='error'>{meta.error}</div>
            ) : null}
        </div>
    );
};

const SelectInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div>
            <label htmlFor={props.id || props.name}>{label}</label>
            <select {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className='error'>{meta.error}</div>
            ) : null}
        </div>
    );
};

const ContactForm = () => {
    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    customer: '',
                    service: [],
                    date: {},
                    info: ''
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                    .max(30, 'Must be less than 30 characters')
                    .required('Required'),
                    email: Yup.string()
                    .email('Invalid email address')
                    .required('Required'),
                    customer: Yup.string()
                    .oneOf(
                        ['homeowner', 'renter', 'realtor', 'propertymanager', 'hoamemeber', 'businessowner', 'other'],
                        'Invalid job type'
                    )
                    .required('Required'),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                <Form>
                    <TextInput
                        label='Name'
                        name='name'
                        type='text'
                        className='col-sm-4 m-2'
                    />
                    <TextInput
                        label='Email'
                        name='email'
                        type='text'
                        className='col-sm-4 m-2'
                    />
                    <SelectInput label='I am a:' name='customer' className='col-sm-4 m-2'>
                        <option value=''>Select one</option>
                        <option value='homeowner'>Homeowner</option>
                        <option value='renter'>Renter</option>
                        <option value='realtor'>Realtor</option>
                        <option value='propertymanager'>Property Manager</option>
                        <option value='hoamember'>HOA Manager/Member</option>
                        <option value='businessowner'>Office Manager</option>
                        <option value='other'>Other</option>
                    </SelectInput>
                    <label>Services requested (chek all that apply):</label>
                        <CheckboxInput type='checkbox' name='service' value='moving'> Moving Services</CheckboxInput>
                        <CheckboxInput type='checkbox' name='service' value='packing'> Packing Services</CheckboxInput>
                        <CheckboxInput type='checkbox' name='service' value='trash'> Trash/Junk Removal</CheckboxInput>
                        <CheckboxInput type='checkbox' name='service' value='pickup'> Pickup/Delivery Service</CheckboxInput>
                        <CheckboxInput type='checkbox' name='service' value='maintenance'> Property Maintenance</CheckboxInput>
                    <TextInput
                        label='Additional information'
                        name='info'
                        type='text'
                        className='m-3 col-sm-7'
                    />
                    <br/>
                    <button type='submit'>Submit</button>
                </Form>
            </Formik>
        </>
    );
};

export default ContactForm;