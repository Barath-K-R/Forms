import express from 'express'
import { updateForm,getUserForms,getForm,newForm,uploadFormData} from '../controllers/formController.js';
const formRouter=express.Router()

formRouter.post('/new',newForm)
formRouter.put('/:formId',updateForm);
formRouter.get('/:formId',getForm)
formRouter.get('/userforms/:userId',getUserForms);
formRouter.post('/formdata',uploadFormData)


export default formRouter;