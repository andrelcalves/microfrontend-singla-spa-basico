import { registerApplication, start } from 'single-spa'

registerApplication(
    'counter',
    () => import('./project/counter'),
    location => location.pathname === '/counter'
)

registerApplication(
    'todo-list',
    () => import('./project/todo-list'),
    location => location.pathname === '/todo-list'
)

start()