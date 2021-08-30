import React from 'react';
import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {useDispatch} from "react-redux";
import {
    createApartmentAction,
} from "../../redux/actions/apartmentActions";
import { useHistory } from "react-router-dom";

const validationSchema = Yup.object().shape({
    apartment_name: Yup.string()
        .required('Apartment Name is required'),
    description: Yup.string()
        .required('Apartment Description is required'),
    country: Yup.string()
        .required('Country Name is required'),
    city: Yup.string()
        .required('City Name is required'),
    total_bedrooms: Yup.number()
        .typeError('You must specify a number')
        .required('Number of bedrooms is required')
        .min(0, 'Min value 0.')
        .max(30, 'Max value 30.'),
    total_bathrooms: Yup.number()
        .typeError('You must specify a number')
        .required('Number of bathrooms is required')
        .min(0, 'Min value 0.')
        .max(30, 'Max value 30.'),
    price_per_night: Yup.number()
        .typeError('You must specify a number')
        .required('Price per night of apartment is required')
        .min(0, 'Min value 0.'),

});
const formOptions = {resolver: yupResolver(validationSchema)};

const AddApartments = () => {
    const {register, handleSubmit, formState} = useForm(formOptions);
    const {errors} = formState;

    const history = useHistory();
    const dispatch = useDispatch();

    const onSubmit = async (formProps) => {
        dispatch(
            await createApartmentAction({
                apartment_name: formProps.apartment_name,
                description: formProps.description,
                country: formProps.country,
                city: formProps.city,
                total_bedrooms: formProps.total_bedrooms,
                total_bathrooms: formProps.total_bathrooms,
                has_tv: formProps.has_tv,
                has_internet: formProps.has_internet,
                has_heating: formProps.has_heating,
                price_per_night: formProps.price_per_night,
                files: formProps.files
            })
        );
        history.push("/hostsApartments");
    };
    return (

        <div className="card m-3">
            <link href="//netdna.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet"/>
            <h5 className="card-header">Add an Apartment</h5>
            <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-row">
                        <div className="form-group col-5">
                            <label>Apartment Name</label>
                            <input name="apartment_name" type="text" {...register('apartment_name')}
                                   className={`form-control ${errors.apartment_name ? 'is-invalid' : ''}`}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-5">
                            <label>Description</label>
                            <textarea  name="description" {...register('description')} rows="3"
                                   className={`form-control ${errors.description ? 'is-invalid' : ''}`}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-5">
                            <label>Country</label>
                            <input name="country" type="text" {...register('country')}
                                   className={`form-control ${errors.country ? 'is-invalid' : ''}`}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-5">
                            <label>City</label>
                            <input name="city" type="text" {...register('city')}
                                   className={`form-control ${errors.city ? 'is-invalid' : ''}`}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-5">
                            <label>Number of Bedrooms</label>
                            <input name="total_bedrooms" type="text" {...register('total_bedrooms')}
                                   className={`form-control ${errors.total_bedrooms ? 'is-invalid' : ''}`}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-5">
                            <label>Number of Bathrooms</label>
                            <input name="total_bathrooms" type="text" {...register('total_bathrooms')}
                                   className={`form-control ${errors.total_bathrooms ? 'is-invalid' : ''}`}/>
                        </div>
                    </div>
                    <div className="form-group form-check">
                        <input name="has_tv" type="checkbox" {...register('has_tv')} id="has_tv"
                               className={`form-check-input`}/>
                        <label htmlFor="has_tv" className="form-check-label">Has TV</label>
                    </div>
                    <div className="form-group form-check">
                        <input name="has_internet" type="checkbox" {...register('has_internet')} id="has_internet"
                               className={`form-check-input`}/>
                        <label htmlFor="has_internet" className="form-check-label">Has Internet</label>
                    </div>
                    <div className="form-group form-check">
                        <input name="has_heating" type="checkbox" {...register('has_heating')} id="has_heating"
                               className={`form-check-input`}/>
                        <label htmlFor="has_heating" className="form-check-label">Has Heating</label>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-5">
                            <label>Price per Night</label>
                            <input name="price_per_night" type="text" {...register('price_per_night')}
                                   className={`form-control ${errors.price_per_night ? 'is-invalid' : ''}`}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-5">
                            <label>Choose an Image...</label>
                            <input {...register('files')} type="file" name="files" multiple="multiple"
                                   // onChange={(event) => dispatch(selectedImagesAction(event))}
                            />
                        </div>
                    </div>
                    {/*<input {...register('file')} type="file" name="file"*/}
                    {/*       onChange={(event) => dispatch(uploadApartmentFileAction(event))}*/}
                    {/*/>*/}
                    {/*<FileInput name="file" control={control}/>*/}
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary mr-1">Add Apartment</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddApartments;
