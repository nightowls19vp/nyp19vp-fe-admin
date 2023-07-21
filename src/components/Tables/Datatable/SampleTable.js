import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// bootstrap
import { Col, Row, Table, Card, Button, Form } from "react-bootstrap";
import {
  DatatableWrapper,
  Filter,
  Pagination,
  PaginationOptions,
  TableBody,
  TableHeader,
  BulkCheckboxControl,
} from "react-bs-datatable";

// assets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

const SampleTable = ({ header, body, onRowClick, children }) => {
  const [curBody, setCurBody] = useState(body);

  function handleSelect(event) {
    const selected = event.target.value;

    if (selected === "all") {
      setCurBody(body);
    } else {
      const filtered = body.filter(
        (elem) => elem.role.toLowerCase() === selected
      );
      setCurBody(filtered);
    }
  }
  useEffect(() => {
    setCurBody(body);
  }, [body]);
  return (
    <DatatableWrapper
      body={curBody ? curBody : body}
      headers={header}
      paginationProps={{
        initialState: { page: 1 },
      }}
      paginationOptionsProps={{
        initialState: {
          rowsPerPage: 10,
          options: [5, 10, 15, 20],
        },
      }}
      checkboxProps={{
        onCheckboxChange: function noRefCheck(data, row) {
          alert(data.nextCheckboxState.selected[1]);
        },
      }}
      sortProps={{
        sortValueObj: {
          name: function noRefCheck() {},
        },
      }}
    >
      <Row className="mb-4">
        <Col xs={12} sm={6} className="d-flex flex-row mt-2">
          <Filter
            placeholder="Tìm kiếm"
            classes={{
              inputGroup: "table-search h-100",
              input: "input-button-group",
              clearButton: "btn-light",
            }}
          />
          <Form.Select
            aria-label="Default select example"
            onChange={handleSelect}
            className="table-filter ms-3 d-none"
          >
            <option value="all">Tất cả</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </Form.Select>
        </Col>
        <Col
          xs={12}
          sm={6}
          className="d-flex flex-row justify-content-end mt-2"
        >
          <PaginationOptions
            alwaysShowPagination
            classes={{ formText: "d-none", formGroup: "text-end" }}
          />
          {/* <Button variant="primary" className="fw-bolder ms-3 d-none">
            <FontAwesomeIcon icon={faPlus} /> Thêm tài khoản
          </Button> */}
          {children}
        </Col>
      </Row>
      <Card border="light" className="bg-white shadow-sm mb-4">
        <Table
          hover
          responsive
          borderless
          className="mx-auto mt-2 overflow-hidden text-start align-middle datatable "
        >
          <TableHeader classes={{ thead: "rounded" }} />
          <TableBody onRowClick={onRowClick} />
        </Table>
        <Row className="mx-2 mb-4 p-2">
          <Col
            xs={12}
            sm={6}
            lg={4}
            className="d-flex flex-col justify-content-sm-start"
          >
            <BulkCheckboxControl />
          </Col>
          <Col
            xs={12}
            sm={6}
            lg={8}
            className="d-flex flex-col justify-content-end align-items-end "
          >
            <Pagination
              alwaysShowPagination
              paginationRange={3}
              labels={{
                firstPage: "Đầu",
                prevPage: <FontAwesomeIcon icon={faAngleLeft} />,
                nextPage: <FontAwesomeIcon icon={faAngleRight} />,
                lastPage: "Cuối",
              }}
            />
          </Col>
        </Row>
      </Card>
    </DatatableWrapper>
  );
};

SampleTable.prototype = {
  header: PropTypes.array,
  body: PropTypes.array,
  onRowClick: PropTypes.func,
  children: PropTypes.node,
};

export default SampleTable;
