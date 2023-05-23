import React from 'react'
import ReactDOM from 'react-dom/client'
import 'antd/dist/antd.css';
import TabsPage from "./TabsPage";
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
    <div style={{padding:20}}>
        <TabsPage />
    </div>
  // </React.StrictMode>
)