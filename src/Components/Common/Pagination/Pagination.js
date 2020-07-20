import React from 'react';
import { Pagination } from 'semantic-ui-react';
import './Pagination.css';

const pagination = props => {
    return (
        <div className="Pagination">
            <Pagination defaultActivePage={11} totalPages={50} />
        </div>
    );
};


export default pagination;