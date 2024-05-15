import { Router } from 'express'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'
import * as petsCtrl from '../controllers/pets.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, petsCtrl.index)
router.post('/', checkAuth, petsCtrl.create)
router.get('/:petId', checkAuth, petsCtrl.show)
router.put('/:petId', checkAuth, petsCtrl.update)
router.delete('/:petId', checkAuth, petsCtrl.delete)
router.post('/:petId/visits', checkAuth, petsCtrl.createVisit)
router.put('/:petId/visits', checkAuth, petsCtrl.updateVisit)
router.delete('/:petId/visits/:visitId', checkAuth, petsCtrl.deleteVisit)
router.put('/:petId/add-photo', checkAuth, petsCtrl.addPhoto)

export { router }
