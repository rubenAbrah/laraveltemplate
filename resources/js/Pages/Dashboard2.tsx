// import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
// import { Head } from '@inertiajs/react';

import DxLayout from "@/Layouts/DxLayout";

export default function Dashboard({}) {
    return (
        <DxLayout>
            <h2 className={"content-block"}>dashboard 2 TTLE</h2>
            <div className={"content-block"}>
                <div className={"dx-card responsive-paddings"}>
                    <span>dashboard 2 content</span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vel consectetur voluptas aliquam dignissimos dicta sunt
                        explicabo rerum esse perspiciatis magni earum nesciunt
                        cumque ullam pariatur illum placeat, voluptatibus
                        commodi repellendus. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Aut unde sed voluptate
                        officiis. Id, sequi velit. Quidem totam ad repellat?
                        Expedita laborum magni cumque? Mollitia harum ea aliquid
                        nobis soluta itaque eligendi nostrum alias? Delectus?
                    </p>
                </div>
            </div>
        </DxLayout>
    );
}
