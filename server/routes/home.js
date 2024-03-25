const testingRoutes = require('../home')
const router = express.Router();

router.get('/api/testing', testingRoutes);