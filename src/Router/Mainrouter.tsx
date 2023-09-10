import {createBrowserRouter} from 'react-router-dom'
import Homescreen from '../Pages/Homescreen'
import Layout from '../Layout/Layout'
import Upload from '../Pages/Upload'


export const MainRouter = createBrowserRouter([{
    path: '/',
    element: <Layout/>,
    children: [
        {
         index: true,
         element : <Homescreen/>
        }
    ]
},{
    path: '/upload-book',
    element : <Upload/>
}])