import React, { useState, useEffect } from 'react';
import { Badge } from 'react-bootstrap';

const BackendHealthStatus: React.FC = () => {
  const [currentHealthStatus, updateHealthStatus] = useState<boolean | null>(null);

  useEffect(() => {
    const fetchHealthStatus = async () => {
      try {
        const response = await fetch('/health'); // Replace with your backend health check endpoint
        if (response.ok) {
          updateHealthStatus(true);
        } else {
          updateHealthStatus(false);
        }
      } catch (error) {
        updateHealthStatus(false);
      }
    };

    fetchHealthStatus();
  }, []);

  return (
    <>
      {currentHealthStatus === null ? (
        <Badge color="secondary">Checking...</Badge>
      ) : currentHealthStatus ? (
        <Badge color="success">Backend is healthy</Badge>
      ) : (
        <Badge color="danger">Backend is not healthy</Badge>
      )}
    </>
  );
};

export default BackendHealthStatus;
