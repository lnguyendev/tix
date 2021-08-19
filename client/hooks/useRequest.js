import axios from 'axios';
import { useState } from 'react';

const useRequest = ({ url, method, body, onSuccess }) => {
  const [errors, setErrors] = useState(null);

  const doRequest = async (props = {}) => {
    setErrors(null);

    try {
      const response = await axios[method](url, { ...body, ...props });
      if (onSuccess) {
        onSuccess(response.data);
      }
      return response.data;
    } catch (e) {
      setErrors(
        <div className="alert alert-danger">
          <h4>ERRORS!</h4>
          <ul className="my-0">
            {(
              e.response.data.errors || [{ message: 'something went wrong' }]
            ).map((err, index) => (
              <li key={index}>{err.message}</li>
            ))}
          </ul>
        </div>
      );
    }
  };

  return {
    doRequest,
    errors,
  };
};

export default useRequest;
