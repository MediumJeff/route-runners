import React from 'react';
import { Row } from 'reactstrap';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import { DatePickerField } from './DatePickerField';

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
    const [field, meta] = useField({ ...props, type: 'checkbox' });
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
                            ['homeowner', 'renter', 'realtor', 'propertymanager', 'hoamember', 'businessowner', 'other'],
                            'Invalid job type'
                        )
                        .required('Required'),
                    date: Yup.date(),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        let formInfo = JSON.stringify(values, null, 2);
                        alert(formInfo);
                        window.open(`mailto:jjmccrac@gmail.com?subject=Inquiry from ${values.name}&body=${formInfo}`);
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
                    <SelectInput label='I am a:' name='customer' className='m-2'>
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
                    <Row className='m-2'>
                        <label>Estimated date of service:</label>
                        <DatePickerField name='date' />
                    </Row>
                    <TextInput
                        id='textarea'
                        label='Additional information (optional)'
                        name='info'
                        type='text'
                        className='m-3 mt-0 col-sm-5'
                    />
                    <br />
                    <button type='submit'>Submit</button>
                </Form>
            </Formik>
        </>
    );
};

export default ContactForm;