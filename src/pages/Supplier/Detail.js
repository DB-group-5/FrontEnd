import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import GroupsIcon from '@mui/icons-material/Groups';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';

function DetailSupplier() {


    return(

      <Card  sx={{ marginBottom: 3, borderRadius: 2, mt: 3 }}>
        <Grid container spacing={4}>
          <Grid item sm={4}>
             
          <CardContent sx={{ paddingTop: 2, paddingBottom: 0 }}>
            <Typography variant="h1" sx={{ fontSize: 30, fontWeight: 600, marginBottom: '5px' }}>
              Supplier Name
            </Typography>
          </CardContent>
          <CardContent sx={{ paddingTop: 2, paddingBottom: 0 }}>
            <Typography variant="h1" sx={{ fontSize: 25, fontWeight: 600, marginBottom: '5px' }}>
              Supplier Name
            </Typography>
            <Typography variant="subtitle1">description</Typography>
            <Typography variant="subtitle2" sx={{ fontSize: '14px', paddingTop: 1 }}>Read more...</Typography>
        
          </CardContent>
          
          </Grid>
          <Grid item sm={4}>
          <CardHeader
              sx={{ paddingBottom: 1 }}
              avatar={
                  <Avatar aria-label="recipe"></Avatar>
              }
              title={
                  <Link 
                      style={{ textDecoration: 'none'}}
                      to={`/profiles`}
                  >
                      <Typography color="primary">
                          username
                      </Typography>
                  </Link>
              }
          />
          <CardContent sx={{ paddingTop: 0, paddingBottom: 0 }}>
              <Link to={"/articles/" } className="preview-link">
                  <Typography variant="h1" sx={{ fontSize: 25, fontWeight: 600, marginBottom: '5px' }}>title</Typography>
                  <Typography variant="subtitle1">description</Typography>
                  <Typography variant="subtitle2" sx={{ fontSize: '14px', paddingTop: 1 }}>Read more...</Typography>
              </Link>
          </CardContent>
          <CardHeader 
              title={(
                  <div>
                      abc
                  </div>
              )}
              action={(
                  <>a</>
              )}
          />
          </Grid>
        </Grid>
          <CardHeader
              sx={{ paddingBottom: 1 }}
              avatar={
                  <Avatar aria-label="recipe"></Avatar>
              }
              title={
                  <Link 
                      style={{ textDecoration: 'none'}}
                      to={`/profiles`}
                  >
                      <Typography color="primary">
                          username
                      </Typography>
                  </Link>
              }
          />
          <CardContent sx={{ paddingTop: 0, paddingBottom: 0 }}>
              <Link to={"/articles/" } className="preview-link">
                  <Typography variant="h1" sx={{ fontSize: 25, fontWeight: 600, marginBottom: '5px' }}>title</Typography>
                  <Typography variant="subtitle1">description</Typography>
                  <Typography variant="subtitle2" sx={{ fontSize: '14px', paddingTop: 1 }}>Read more...</Typography>
              </Link>
          </CardContent>
          <CardHeader 
              title={(
                  <div>
                      abc
                  </div>
              )}
              action={(
                  <>a</>
              )}
          />
      </Card>
          
    );
}

export default DetailSupplier;