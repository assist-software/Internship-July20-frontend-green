import React from 'react';
import { Pagination } from 'semantic-ui-react';
import './Pagination.css';

const pagination = props => {
    return (
        <div className="Pagination">
            <Pagination defaultActivePage={1} totalPages={10} />
        </div>
    );
};


export default pagination;