import express from 'express'
import { addForm,getUserForms,getForm} from '../controllers/formController.js';
const formRouter=express.Router()

formRouter.get('/:formId',getForm)
formRouter.get('/userforms/:userId',getUserForms);
formRouter.post('/addform/:id',addForm);

export default formRouter;