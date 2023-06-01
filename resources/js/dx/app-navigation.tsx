import { Link, router } from "@inertiajs/react";
import { Button } from "devextreme-react";
import Toolbar, { Item } from "devextreme-react/toolbar";
// import { Item } from "devextreme-react/tile-view";

// export const navigation = [
//   {
//     text: 'dashboard',
//     path: '/dashboard',
//     icon: 'home'
//   },
//   {
//     text: 'dashboards',
//     icon: 'dashboards',
//     items: [
//       {
//         text: 'dashboard2',
//         path: '/dashboard2'
//       },
//       {
//         text: 'dashboard3',
//         path: '/dashboard3'
//       }
//     ]
//   }
// ];

export const navigation = [
    {
        text: "Главная2",
        path: "/dashboard",
        icon: "home",
        
        // component: (props)=>{
        //   return (<>
        //     {/* <Link href={route(props.itemData.path)}>{props.itemData.name}</Link> */}
        //   </>);
        // },

        // onClick: (event) => {
        //     // console.log(event)
        //     // event.itemData.path
        //     let url = event.itemData.path;
        //     router.visit(url, { preserveScroll: true });
        // },
    },
    {
        text: "Пример",
        icon: "folder",
        items: [
            {
                text: "Профиль",
                path: "/dashboard2",
                icon: "home",
                // onClick: (event) => {
                //     // console.log(event)
                //     // event.itemData.path
                //     let url = event.itemData.path;
                //     router.visit(url, { preserveScroll: false });
                // },
            },
            {
                text: "Задачи",
                path: "/dashboard3",
                icon: "home",
                // component: ()=>{
                //   return (
                //     <>
                //           <Item location="after">
                //           </Item>
                //     </>
                //   )
                // }
            },
        ],
    },
];
