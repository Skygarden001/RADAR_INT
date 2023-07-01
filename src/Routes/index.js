
import Radar from '../pages/Radar';
import Launch from '../pages/Launch';
import Satellite from '../pages/Satellite';
const publicRoutes= [
    {path: "/", component: Radar},
    {path: "/Launch", component: Launch},
    {path: "/Satellite", component: Satellite},
]
const privateRoutes=[]
export {publicRoutes, privateRoutes}