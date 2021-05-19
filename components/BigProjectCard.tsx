import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    width: '60%',
    height: 350,
    margin: 20,
    backgroundColor: '#E2E0DF',
  },
  media: {
    height: 350,
    width: '100%',
    backgroundColor: 'black',
  },
})

export default function BigProjectCard(props) {
  const classes = useStyles()
  const { name, description, imgURL, url } = props
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <CardMedia
            className={classes.media}
            image={imgURL}
            title="web image"
          />
        </a>
      </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
        <Typography variant="h5" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>

      <style jsx>
        {`
          a {
            text-decoration: none;
          }
        `}
      </style>
    </Card>
  )
}
