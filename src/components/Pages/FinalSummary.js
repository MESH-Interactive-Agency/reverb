import React, { useRef } from 'react';
import { Button } from 'react-bootstrap';
import ReactToPrint from 'react-to-print';
import PrintableSummary from './PrintableSummary';

export default function PrintComponent() {
  let componentRef = useRef();

  return (
    <>
      <div>
        {/* button to trigger printing of target component */}
        <ReactToPrint
          trigger={() => (
            <Button className="top-right-print round-button">
              Print/Save PDF
            </Button>
          )}
          content={() => componentRef}
        />

        {/* component to be printed */}
        <PrintableSummary ref={(el) => (componentRef = el)} />
      </div>
    </>
  );
}
