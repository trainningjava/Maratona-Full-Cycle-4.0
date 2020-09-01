import React, { useEffect, useState, FormEvent } from "react";

import PageHeader from "../../components/PageHeader";
import UserItem, { User } from "../../components/UserItem";

import api from "../../services/api";

import "./styles.css";

function UserList() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(0);

  useEffect(() => {
    api.get("users").then((response) => {
      setUsers(response.data.data);
      setLastPage(response.data.total_pages);
    });
  }, []);

  function firstFuncPage() {
    setPage(1);
  }

  function beforeFuncPage() {
    if (page !== 1) {
      setPage(page - 1);
    }
  }

  function afterFuncPage() {
    if (page !== lastPage) {
      setPage(page + 1);
    }
  }

  function LastFuncPage() {
    setPage(lastPage);
  }

  async function handlePagination(e: FormEvent) {
    e.preventDefault();

    try {
      const response = await api.get("users", {
        params: {
          page,
        },
      });
      setUsers(response.data.data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div id="page-user-list" className="container">
      <PageHeader />
      <div>
        {users.map((users: User) => {
          return <UserItem key={users.id} user={users} />;
        })}
      </div>
      <form id="user-pagination" onSubmit={handlePagination}>
        <div id="button-group">
          <button onClick={firstFuncPage}>&#8606;</button>
          <button onClick={beforeFuncPage}>&#8592;</button>
          <button onClick={afterFuncPage}>&#8594;</button>
          <button onClick={LastFuncPage}>&#8608;</button>
        </div>
      </form>
    </div>
  );
}
export default UserList;
