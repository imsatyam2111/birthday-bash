import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Backdrop, CircularProgress} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { endLoader, startLoader } from '../../redux/reducers/loader';


const useStyles = makeStyles({
  table: {
		width: 1100,
  },
	paper: {
		width: 1100,
	}
});

const Birthdays = () => {
  const classes = useStyles();
	const dispatch = useDispatch();
	const [birthdays, setBirthdays] = useState([]);

	const { isLoading } = useSelector(state => state.loader);

	async function getBirthdays() {
		const querySnapshot = await getDocs(collection(db, "birthdays"));
		const tempData = [];
		querySnapshot.forEach((doc) => {
			tempData.push(
				{
					id: doc.id,
					data: doc.data()
				}
				);
			});
			setBirthdays(tempData);
			dispatch(endLoader());
		}

	useEffect(() => {
		dispatch(startLoader());
		getBirthdays();
	}, []);
	
	const handleDelete = async (id) => {
		await deleteDoc(doc(db, "birthdays", id));
		getBirthdays();
	}

	function createData(name, dob) {
		return { name, dob };
	}
	
	const rows = [
		createData('Satyam Saurabh', 25),
		createData('Satyam Saurabh', 32),
	];

	return ( 
		<div>
			<h3 className="birthdays-container">
				Birthdays:
			</h3>
			<Backdrop open={isLoading}>
				<CircularProgress color="inherit" />
			</Backdrop>
			<div className="table">
				<TableContainer component={Paper} className={classes.table}>
					<Table className={classes.table} aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell align="center">First Name</TableCell>
								<TableCell align="center">Last Name</TableCell>
								<TableCell align="center">Contact</TableCell>
								<TableCell align="center">Email</TableCell>
								<TableCell align="center">Date of Birth</TableCell>
								<TableCell align="center">Flavour</TableCell>
								<TableCell align="center">Size</TableCell>
								<TableCell align="center">Address</TableCell>
								<TableCell align="center">Action</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{birthdays.map((birthday, index) => (
								<TableRow key={index}>
									<TableCell align="center" component="th" scope="row">{birthday.data.firstName}</TableCell>
									<TableCell align="center" component="th" scope="row">{birthday.data.lastName}</TableCell>
									<TableCell align="center" component="th" scope="row">{birthday.data.contactNo}</TableCell>
									<TableCell align="center" component="th" scope="row">{birthday.data.email}</TableCell>
									<TableCell align="center">{birthday.data.dob}</TableCell>
									<TableCell align="center">{birthday.data.flavour}</TableCell>
									<TableCell align="center">{birthday.data.size}</TableCell>
									<TableCell align="center">{`${birthday.data.address}, ${birthday.data.state}`}</TableCell>
									<TableCell align="center">
										<DeleteIcon className="delete" onClick={() => handleDelete(birthday.id)} />
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</div>
		</div>
	);
}
 
export default Birthdays;
