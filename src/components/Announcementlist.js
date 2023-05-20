import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';


const Announcementlist = ({heading,description}) => {
  return (
    <>
             <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{heading}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {description}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  )
}

export default Announcementlist