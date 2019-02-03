import * as React from 'react'
import { Link } from 'react-router-dom'
import { ClampLines } from '../../../../components/ClampLines/ClampLines'
import CardActions from '@material-ui/core/CardActions'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import IconButton from '@material-ui/core/IconButton'
import LinearProgress from '@material-ui/core/LinearProgress'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import CommentIcon from '@material-ui/icons/Comment'
import TurnedInIcon from '@material-ui/icons/TurnedIn'
import { theme } from '../../../../themes/app.theme'
import { IHowto } from 'src/models/models'

import { CreateButton } from './elements'

import { Button } from 'src/components/Button'

const styles: any = {
  cards: {
    borderRadius: '0px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  layout: {
    width: 'auto',
  },
  link: {
    textDecoration: 'none',
    color: 'black',
  },
  cardMedia: {
    paddingTop: '60%', // 16:9
  },
  cardContent: {
  },
}

interface IProps {
  allHowtos: IHowto[]
}
export class HowtoList extends React.Component<IProps, any> {
  constructor(props: any) {
    super(props)
  }

  public render() {
    const { allHowtos } = this.props
    return (
      <div>
        <Typography
          style={{ margin: '30px auto', display: 'table' }}
          variant="h4"
          component="h4"
        >
          How-To
        </Typography>
        <Link to={'/how-to/create'}>
          <CreateButton icon={'add'}>create how-to</CreateButton>
        </Link>
        <React.Fragment>
          <div style={styles.layout}>
            {allHowtos.length === 0 ? (
              <LinearProgress />
            ) : (
              <Grid container spacing={16}>
                {allHowtos.map((howto: IHowto, index: number) => (
                  <Grid item key={index} xs={4}>
                    <Link
                      to={`/how-to/${encodeURIComponent(howto.slug)}`}
                      style={styles.link}
                    >
                      <Card
                        style={styles.cards}
                      >
                        <CardMedia
                          style={styles.cardMedia}
                          image={
                            howto.cover_image
                              ? howto.cover_image.downloadUrl
                              : howto.cover_image_url
                          } // eslint-disable-line max-len
                          title="Image title"
                        />
                        <CardContent style={styles.cardContent}>
                          <Typography variant='h6'>
                            {howto.tutorial_title}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Typography>username</Typography>
                            <IconButton>
                              <TurnedInIcon />
                            </IconButton>
                            <IconButton>
                              <CommentIcon />
                            </IconButton>
                            <IconButton>
                              <MoreVertIcon />
                            </IconButton>
                        </CardActions>
                      </Card>
                    </Link>
                  </Grid>
                ))}
              </Grid>
            )}
          </div>
          {allHowtos.length > 15 ? (
            <Link to={'/how-to/create'}>
              <CreateButton icon={'add'}>create how-to</CreateButton>
            </Link>
          ) : null}
        </React.Fragment>
      </div>
    )
  }
}
