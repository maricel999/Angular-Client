import { LoanPage } from './LoanPage';

export const LOAN_DATA: LoanPage = {
    content: [
        {   
            id: 1, 
            game: { id: 1, title: 'Juego 1', age: 6, category: { id: 1, name: 'Categoría 1' }, author: { id: 1, name: 'Autor 1', nationality: 'Nacionalidad 1' } }, 
            client: { id: 1, name: 'Cliente 1' }, 
            dateStart: new Date("2023-02-01"), 
            dateEnd: new Date("2023-02-06"),
        },
        {   
            id: 2, 
            game: { id: 2, title: 'Juego 2', age: 8, category: { id: 1, name: 'Categoría 1' }, author: { id: 2, name: 'Autor 2', nationality: 'Nacionalidad 2' } },
            client: { id: 1, name: 'Cliente 1' }, 
            dateStart: new Date("2023-02-02"), 
            dateEnd: new Date("2023-02-14"),
        },
        {   
            id: 3, 
            game: { id: 1, title: 'Juego 1', age: 6, category: { id: 1, name: 'Categoría 1' }, author: { id: 1, name: 'Autor 1', nationality: 'Nacionalidad 1' } }, 
            client: { id: 1, name: 'Cliente 1' }, 
            dateStart: new Date("2023-02-07"), 
            dateEnd: new Date("2023-02-14"),
        },
        {   
            id: 4, 
            game: { id: 3, title: 'Juego 3', age: 4, category: { id: 1, name: 'Categoría 1' }, author: { id: 3, name: 'Autor 3', nationality: 'Nacionalidad 3' } },
            client: { id: 2, name: 'Cliente 2' }, 
            dateStart: new Date("2023-02-01"), 
            dateEnd: new Date("2023-02-09"),
        },
        {   
            id: 5, 
            game: { id: 4, title: 'Juego 4', age: 10, category: { id: 2, name: 'Categoría 2' }, author: { id: 1, name: 'Autor 1', nationality: 'Nacionalidad 1' } },
            client: { id: 3, name: 'Cliente 3' }, 
            dateStart: new Date("2023-02-01"), 
            dateEnd: new Date("2023-02-10"),
        },
        {   
            id: 6, 
            game: { id: 4, title: 'Juego 4', age: 10, category: { id: 2, name: 'Categoría 2' }, author: { id: 1, name: 'Autor 1', nationality: 'Nacionalidad 1' } },
            client: { id: 4, name: 'Cliente 4' }, 
            dateStart: new Date("2023-02-10"), 
            dateEnd: new Date("2023-02-21"),
        },
    ],
    pageable : {
        pageSize: 5,
        pageNumber: 0,
        sort: [
            {property: "id", direction: "ASC"}
        ]
    },
    totalElements: 6
}