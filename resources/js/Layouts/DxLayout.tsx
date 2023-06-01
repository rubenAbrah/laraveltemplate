import { Footer } from "@/dx/components"
import 'devextreme/dist/css/dx.common.css';
import '@/dx/themes/generated/theme.base.css';
import '@/dx/themes/generated/theme.additional.css'; 
import '@/dx/pages/home/home.scss';
import { PageProps } from "@/types";  
import appInfo from "@/dx/app-info";
import routes from "@/dx/app-routes";
import { SideNavOuterToolbar as SideNavBarLayout } from "@/dx/layouts"; 
import { useScreenSizeClass } from '@/dx/utils/media-query'; 
import { Link } from '@inertiajs/react'
function DxLayout({children}){
    const screenSizeClass = useScreenSizeClass();
return(
    <>

{/* <Link href="/dashboard">dashboard</Link> */}
{/* <Link href="dashboard2">dashboard2</Link> */}
{/* <Link href="dashboard3">dashboard3</Link> */}
    <div className={`app ${screenSizeClass}`}> 
    <SideNavBarLayout  title={appInfo.title}>
     
    {children}

      <Footer>
        Copyright © 2011-{new Date().getFullYear()} {appInfo.title} Inc.
        <br />
        All trademarks or registered trademarks are property of their
        respective owners.
      </Footer>
    </SideNavBarLayout>
    </div>
    
    </>
)
}
export default DxLayout
 