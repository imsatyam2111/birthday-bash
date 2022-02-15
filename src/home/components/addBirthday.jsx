import { useState } from 'react';	
import { useForm, Controller } from "react-hook-form";
import { Button, TextField, MenuItem } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import { format } from 'date-fns';
import { db } from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiSelect-root': {
      margin: theme.spacing(1),
      width: '15ch',
    },
  },
}));

const flavours = [
  {
    value: 'chocolate',
    label: 'chocolate',
  },
  {
    value: 'vanilla',
    label: 'Vanilla',
  },
  {
    value: 'butterscotch',
    label: 'Butterscotch',
  },
];

const AddBirthday = () => {
	const classes = useStyles();
	const [flavour, setFlavour] = useState('1 Pound');

  const handleChange = (event) => {
    setFlavour(event.target.value);
  };
	const defaultValues = {
		firstName: ``,
		lastName: ``,
		email: ``,
		contactNo: ``,
		date: format(new Date(), `yyyy-MM-dd`),
		address: ``,
		state: ``,
		size: ``,
	};

	const {
		register,
    control,
		reset,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: `onChange`,
		defaultValues,
    reValidateMode: `onChange`,
  });


	const onSubmit = async (data) => {
		console.log(data);
		addDoc(collection(db, "birthdays"), {
			firstName: data.firstName,
			lastName: data.lastName,
			email: data.email,
			contactNo: data.contactNo,
			dob: data.date,
			address: data.address,
			state: data.state,
			size: data.size,
			flavour: flavour,
		})
		reset('', {
			keepValues: false,
		});
  };
	console.log('err', errors);

	const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 

	const showErrorText = (field) => {
		if (errors && errors[field] !== undefined)	{
			if ( errors[field]?.type === 'required') {
				return 'required field';
			} else if (errors[field]?.type === 'minLength') {
				return 'must be at least 2 character';
			} else if (errors[field]?.type === 'maxLength') {
				return 'you have crossed max length limit';
			} else if (errors[field]?.type === 'pattern') {
				return 'enter a valid email';
			}
		};
	};

	return ( 
		<div className="add-birthday">
			<h3>Add Birthday</h3>
			<form onSubmit={handleSubmit(onSubmit)} className={classes.root}>
				<Controller
					name="firstName"
					render={({ field: { onChange, value } }) => (
						<TextField
							className="form-input input-name"
							type="text"
							label="FirstName *"
							variant="outlined"
							onChange={onChange}
							value={value}
							{...register("firstName", { required: true, minLength: 3 })}
							error={Boolean(errors.firstName)}
							helperText={showErrorText('firstName')}
							size="small"
						/>
					)}
					control={control}
				/>
				<Controller
					name="lastName"
					render={({ field: { onChange, value } }) => (
						<TextField
							className="form-input input-name"
							type="text"
							label="Last Name *"
							variant="outlined"
							onChange={onChange}
							value={value}
							{...register("lastName", { required: true, maxLength: 5 })}
							error={Boolean(errors.lastName)}
							helperText={showErrorText('lastName')}
							size="small"
						/>
					)}
					control={control}
				/>
				<Controller
					name="email"
					render={({ field: { onChange, value } }) => (
						<TextField
							className="form-input input-name"
							type="text"
							label="Email *"
							variant="outlined"
							onChange={onChange}
							value={value}
							{...register("email", { required: true, pattern: emailRegex })}
							error={Boolean(errors.email)}
							helperText={showErrorText('email')}
							size="small"
						/>
					)}
					control={control}
				/>
				<Controller
					name="contactNo"
					render={({ field: { onChange, value } }) => (
						<TextField
							className="form-input input-name"
							type="text"
							label="Contact *"
							variant="outlined"
							onChange={onChange}
							value={value}
							{...register("contactNo", { required: true })}
							error={Boolean(errors.contactNo)}
							helperText={errors.contactNo && "Required Field"}
							size="small"
						/>
					)}
					control={control}
				/>
				<Controller
					name="date"
					render={({ field: { onChange, value } }) => (
						<TextField
							id="date"
							className="form-input input-date"
							label="Birthday"
							type="date"
							variant="outlined"
							size="small"
							defaultValue={value}
							{...register("date", { required: true })}
							error={Boolean(errors.date)}
							helperText={errors.date && "Required Field"}
							InputLabelProps={{
								shrink: true,
							}}
						/>
					)}
					control={control}
				/>
				<Controller
					name="address"
					render={({ field: { onChange, value } }) => (
						<TextField
							className="form-input input-name"
							type="text"
							label="Address *"
							variant="outlined"
							onChange={onChange}
							value={value}
							{...register("address", { required: true })}
							error={Boolean(errors.address)}
							helperText={errors.address && "Required Field"}
							size="small"
						/>
					)}
					control={control}
				/>
				<Controller
					name="state"
					render={({ field: { onChange, value } }) => (
						<TextField
							className="form-input input-name"
							type="text"
							label="State *"
							variant="outlined"
							onChange={onChange}
							value={value}
							{...register("state", { required: true })}
							error={Boolean(errors.state)}
							helperText={errors.state && "Required Field"}
							size="small"
						/>
					)}
					control={control}
				/>
				<Controller
					name="size"
					render={({ field: { onChange, value } }) => (
						<TextField
							className="form-input input-name"
							type="text"
							label="Size *"
							variant="outlined"
							onChange={onChange}
							value={value}
							{...register("size", { required: true })}
							error={Boolean(errors.size)}
							helperText={errors.size && "Required Field"}
							size="small"
						/>
					)}
					control={control}
				/>
				<TextField
          id="standard-select-currency"
          select
          value={flavour}
          onChange={handleChange}
          helperText="Please select your flavour"
        >
            {flavours.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
				<Button className="add-button" variant="outlined" type="submit">Add</Button>
			</form>
		</div>
	 );
}
 
export default AddBirthday;