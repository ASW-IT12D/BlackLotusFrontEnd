import React, { useState, useEffect } from 'react';
import { changeUser, getToken } from '../Token';

function SortedIssues() {
  const [issues, setIssues] = useState([]);
  const [sortedIssues, setSortedIssues] = useState([]);
  const [sortOptions, setSortOptions] = useState({
    attribute: 'subject',
    order: 'asc'
  });

  useEffect(() => {
    fetch('http://127.0.0.1:8000/issues/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + getToken()
      }
    })
      .then(resp => resp.json())
      .then(resp => {
        setIssues(resp);
        setSortedIssues(resp);
      });
  }, []);

  const handleSortChange = (event) => {
    const { name, value } = event.target;
    setSortOptions(prevOptions => ({
      ...prevOptions,
      [name]: value
    }));
  };

  useEffect(() => {
    const { attribute, order } = sortOptions;

    const sorted = [...issues].sort((a, b) => {
      if (a[attribute] < b[attribute]) {
        return order === 'asc' ? -1 : 1;
      }
      if (a[attribute] > b[attribute]) {
        return order === 'asc' ? 1 : -1;
      }
      return 0;
    });

    setSortedIssues(sorted);
  }, [sortOptions, issues]);

  return (
    <div>
      <h2>Sorted Issues</h2>

      <div>
        <label>Sort By:</label>
        <select name="attribute" value={sortOptions.attribute} onChange={handleSortChange}>
          <option value="status">Status</option>
          <option value="type">Type</option>
          <option value="severity">Severity</option>
          <option value="priority">Priority</option>
        </select>
        <select name="order" value={sortOptions.order} onChange={handleSortChange}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>

      <ul>
        {sortedIssues.map(issue => (
          <li key={issue.id}>{issue.subject}</li>
        ))}
      </ul>
    </div>
  );
}

export default SortedIssues;
