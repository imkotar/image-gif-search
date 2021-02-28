import React, { useState, useEffect } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

interface PaginationProps {
    searchData: {
        type: string,
        searchInput: string | number,
        perPage: number,
        page: number
    },
    onPaginationChange: Function,
    totalPagesNumber: Number
}

export const Pagination: React.FC<PaginationProps> = ({searchData, onPaginationChange, totalPagesNumber}) => {
  const [page, setPage] = useState(searchData.page)
  const [perPage, setPerPage] = useState(searchData.perPage)

  useEffect(() => {
    generatePaginationData()
    pagesList(totalPagesNumber)
  }, [page, perPage])

  const generatePaginationData = () => {
    onPaginationChange({page, perPage})
  }

  const pagesList = (totalPagesNumber: Number) => {
      const pages = [];
      for (let i=1; i <= totalPagesNumber; i++){ {
        pages.push(<option key={i} value={i}>{i}</option>)
      }
    }
    return pages; 
  }

  const onDropdownSelected = (e: any) => {
    setPage(e.target.value)
  }

  const onPerPageChange = (e: any) => {
    setPerPage(e.target.value)
  }

  return (
    <div>
        <Grid fluid>
          <Row>
            <Col xs={6} md={2} lg={1}>
              Page: 
              <select onChange={onDropdownSelected}>
                {pagesList(totalPagesNumber)}
              </select>
            </Col>
            <Col xs={6} md={2}>
              Per page: 
              <select value={perPage} onChange={onPerPageChange}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
              </select>
            </Col>
          </Row>
        </Grid>
    </div>
  );
  }
  
  