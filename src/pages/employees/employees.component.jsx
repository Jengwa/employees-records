import React,{useState} from 'react';
import EmployeeForm from './empoloyee-form';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import EditIcon from '@material-ui/icons/Edit';
import PageHeader from '../../components/page-header/page-header.component';
import { InputAdornment, makeStyles, Paper, TableBody, TableCell, TableRow, Toolbar} from '@material-ui/core';
import {useTable} from '../../components/custom-form/useTable';
import { InputControls } from '../../components/form-controls/input-controls.component';
import  * as employeeService from '../../services/employeeService';
import { Search } from '@material-ui/icons';
import CloseIcon from '@material-ui/icons/Close';
import { CustomButtonControl } from '../../components/form-controls/button-controls.component';
import AddIcon from '@material-ui/icons/Add';
import { PopUp }  from '../../components/custom-form/usePopUp';
import { ActionButon } from '../../components/form-controls/action-button.component';
import { Notification } from '../../components/form-controls/notifications-controls.component';
import { ConfirmDialog } from '../../components/form-controls/confirm-dialog.component';

const useEmployeeStyles = makeStyles(theme => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3)
  },
  searchInput: {
    width: '75vh'
  },
  newButton: {
    position: 'absolute',
    right: '10px'
  }
}))

const headsCells = [
  {id: 'fullName', label: 'Employee Name'},
  {id: 'email', label: 'Email Address'},
  {id: 'mobile', label: 'Mobile Number'},
  {id: 'departmentId', label: 'Department'},
  {id: 'actions', label: 'Actions', disableSorting: true}
]

const Employees = () => {

  const classes = useEmployeeStyles();
  const [recordForEdit, setRecordForEdit] = useState(null)
  const [records, setRecords ] = useState(employeeService.getAllEmployees());
  const [filterEmployees, setFilterEmployees] = useState({fn: items => {return items; }})
  const [openPopUp, setOpenPopUp ]= useState(false);
  const [notify, setNotify] = useState({isOpen: false, message: '', type: '' });
  const [confirmDialog, setConfirmDialog] = useState({isOpen: false, title: '', subTitle: ''})


 const { 
  TableContainer,
  TableHeader,
  TblPagenation,
  recordsAfterPagingAndSorting
 } = useTable(records, headsCells,filterEmployees);
  
  const handleSearchChange = e => {
    let target = e.target;
    setFilterEmployees({
      fn: items => {
        if(target.value === '')
          return items;
        else 
          return items.filter(x => x.fullName.toLowerCase().includes(target.value))
      }
    })
  };

  const addOrEdit = (employee, resetForm) => {
    if(employee.id === 0)
      employeeService.insertEmployee(employee)
    else
     employeeService.updateEmployee(employee)
      resetForm()
      setOpenPopUp(false)
      setRecordForEdit(null)
      setRecords(employeeService.getAllEmployees())
      setNotify({
        isOpen: true,
        message: 'Successfully Submitted',
        type: 'success'
      });
     
  };

  const openInPopUp = item =>{
    setRecordForEdit(item);
    setOpenPopUp(true);
  };

  const handleDelete = id => {
    setConfirmDialog({
      ...confirmDialog,
      isOpen: false
    })
      employeeService.deleteEmployee(id);
      setRecords(employeeService.getAllEmployees());
      setNotify({
        isOpen: true,
        message: 'Successfully Deleted',
        type: 'error'
      });
    
    
  };

  return (
    <div>
      <PageHeader
        title='New Employee'
        subTitle='Form Design with validation'
        icon={<PeopleOutlineIcon fontSize='large'/>}
      />
      <Paper className = {classes.pageContent}>
        <Toolbar>
          <InputControls
          label ='Search Employees'
          className={classes.searchInput}
          InputProps={{
            startAdornment: (
              <InputAdornment
                position='start'
              >
                <Search/>
              </InputAdornment>
            )
          }}
          onChange={handleSearchChange}
          />
          <CustomButtonControl
            className ={classes.newButton}
            text='Add New Employee'
            variant= 'outlined'
            startIcon= {<AddIcon />}
            onClick= {() => {setOpenPopUp(true); setRecordForEdit(null);}}
          />
        </Toolbar>
        <TableContainer>
        <TableHeader />
            <TableBody>
              {
                recordsAfterPagingAndSorting().map(item => (
                  <TableRow key={item.id}>
                    <TableCell>
                      {item.fullName}
                    </TableCell>
                    <TableCell>
                      {item.email}
                    </TableCell>
                    <TableCell>
                      {item.mobile}
                    </TableCell>
                    <TableCell>
                      {item.department}
                    </TableCell>
                    <TableCell>
                      <ActionButon
                        color='primary'
                        onClick={()=> {openInPopUp(item)}}
                      >
                      <EditIcon fontSize='small' />
                      </ActionButon> 
                      <ActionButon
                        color='secondary'
                        onClick={() => {
                          setConfirmDialog({
                            isOpen: true,
                            title: "Are you sure you wan't to delete the employee?",
                            subTitle: "You won't be able to undo this action",
                            onConfirm: () => { handleDelete(item.id) }
                          })
                        
                        }}
                      >
                      <CloseIcon fontSize='small' />
                      </ActionButon> 
                    </TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </TableContainer>
        <TblPagenation />
      </Paper>
      <PopUp 
        title='Employee Form'
        openPopUp={openPopUp}
        setOpenPopUp={setOpenPopUp}
      >
        <EmployeeForm 
          recordForEdit={recordForEdit}
          addOrEdit={addOrEdit}
         
        />
      </PopUp>
      <Notification
        notify={notify}
        setNotify={setNotify}
       />

       <ConfirmDialog
         confirmDialog={confirmDialog}
         setConfirmDialog={setConfirmDialog}     
       />
      
    </div>
  )
}
export default Employees;