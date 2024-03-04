import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

export default function SideBarTheme() {

    const navigate = useNavigate()

    const onClickToNavigate = (event, path) => {
        event.preventDefault()
        navigate(path)
    }

    return (
        <Sidebar aria-label="Default sidebar example">
            <div className='m-2'>
                <img src="https://www.dako.com.br/media/wysiwyg/Logo_Dako.png1.png" />
            </div>
        <Sidebar.Items>
            <Sidebar.ItemGroup>
            <Sidebar.Item href="#" onClick={(event) => { onClickToNavigate(event, '/app') }} icon={HiChartPie}>
                Dashboard
            </Sidebar.Item>
            <Sidebar.Item href="#" onClick={(event) => { onClickToNavigate(event, '/app/kanban') }} icon={HiViewBoards} label="Pro" labelColor="dark">
                Kanban
            </Sidebar.Item>
            <Sidebar.Item href="#" onClick={(event) => { onClickToNavigate(event, '/app/inbox') }} icon={HiInbox} label="3">
                Inbox
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiUser}>
                Users
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiShoppingBag}>
                Products
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiArrowSmRight}>
                Sign In
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiTable}>
                Sign Up
            </Sidebar.Item>
            </Sidebar.ItemGroup>
        </Sidebar.Items>
        </Sidebar>
    );
}