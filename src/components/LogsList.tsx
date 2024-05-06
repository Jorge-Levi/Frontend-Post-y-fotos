// src/components/LogsList.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './LogsList.css';

// Define el tipo de Log
interface Log {
  id: number;
  requestUrl: string;
  timestamp: string;
}

const LogsList: React.FC = () => {
  const [logs, setLogs] = useState<Log[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Obtener los logs desde el backend
  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/logs');
        setLogs(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching logs:', error);
        setIsLoading(false);
      }
    };

    fetchLogs();
  }, []);

  if (isLoading) {
    return <div>Loading logs...</div>;
  }

  return (
    <div className="logs-list">
      <h2>Logs</h2>
      <ul>
        {logs.map(log => (
          <li key={log.id}>
            <strong>ID:</strong> {log.id}, <strong>URL:</strong> {log.requestUrl}, <strong>Timestamp:</strong> {new Date(log.timestamp).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LogsList;
