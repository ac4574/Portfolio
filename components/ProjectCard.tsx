import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    width: '19%',
    height: 400,
    margin: 20,
  },
  media: {
    height: 140,
    backgroundColor: 'black',
  },
})

export default function ProjectCard(props) {
  const classes = useStyles()
  const { name, description, imgURL, url, interactionButton } = props
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
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <Button size="small" color="primary">
            {interactionButton}
          </Button>
        </a>
      </CardActions>
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
