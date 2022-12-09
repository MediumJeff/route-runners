import React from 'react';
import { Formik, Form, Field, useField } from 'formik';
import * as Yup from 'yup';


const TextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props)
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

const DatePicker = ({ name, value, onChange }) => {
    return (
        <DatePicker
            selected={(value && new Date(value)) || null}
            onChange={val => {
                onChange(name, val);
            }}
        />
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
                    date: '',
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
                    service: Yup.array()
                    .min(1).of(
                        ['moving', 'packing', 'trash', 'pickup', 'maintenance'], 'Invalid service'
                    )
                    .required('Required'),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        JSON.stringify(values, null, 2);
                        setSubmitting(false);
                    }, 400);
                }}
            >
                <Form>
                    <TextInput
                        label='Name'
                        name='name'
                        type='text'
                    />
                    <TextInput
                        label='Email'
                        name='email'
                        type='text'
                    />
                    <SelectInput label='I am a:' name='customer'>
                        <option value=''>Select one</option>
                        <option value='homeowner'>Homeowner</option>
                        <option value='renter'>Renter</option>
                        <option value='realtor'>Realtor</option>
                        <option value='propertymanager'>Property Manager</option>
                        <option value='hoamember'>HOA Manager/Member</option>
                        <option value='businessowner'>Office Manager</option>
                        <option value='other'>Other</option>
                    </SelectInput>
                    <CheckboxInput label='I am interested in (check all that apply)' name='service'>
                        <Field type='checkbox' name='service' value='moving'>Moving Services</Field>
                        <Field type='checkbox' name='service' value='packing'>Packing Services</Field>
                        <Field type='checkbox' name='service' value='trash'>Trash/Junk Removal</Field>
                        <Field type='checkbox' name='service' value='pickup'>Pickup/Delivery Service</Field>
                        <Field type='checkbox' name='service' value='maintenance'>Property Maintenance</Field>
                    </CheckboxInput>
                    <DatePicker
                        label='Estimated date of service'
                        name='date'
                        type='date'
                    />
                    <TextInput
                        label='Additional information'
                        name='info'
                        type='text'
                    />

                    <button type='submit'>Submit</button>
                </Form>
            </Formik>
        </>
    )
}

export default ContactForm;