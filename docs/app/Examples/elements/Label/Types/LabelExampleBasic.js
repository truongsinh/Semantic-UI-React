import React from 'react'
import { Container, Divider, Icon, Image, Label } from 'semantic-ui-react'

const LabelExampleBasic = () => (
  <Container>
    <Divider hidden />

    <h2>_meta (statics)</h2>
    <pre><code>Label._meta {JSON.stringify(Label._meta)}</code></pre>
    <pre><code>Label.Detail._meta {JSON.stringify(Label.Detail._meta)}</code></pre>
    <pre><code>Label.Group._meta {JSON.stringify(Label.Group._meta)}</code></pre>

    <h2>Default</h2>
    <div>
      <Label>label</Label>
    </div>

    <h2>as='a'</h2>
    <div>
      <Label as='a'>
        <Icon name='mail' /> 23
      </Label>
    </div>

    <h2>Detail</h2>
    <div>
      <Label>
        <Icon name='mail' />
        23
        <Label.Detail>View Mail</Label.Detail>
      </Label>
    </div>

    <h2>Image</h2>
    <div>
      <Label as='a' image>
        <Image avatar spaced='right' src='/assets/images/avatar/small/elliot.jpg' /> Elliot
      </Label>
      <Label
        as='a'
        image
        renderImage={({ styles }) => <img className={styles.__img} src='/assets/images/avatar/small/stevie.jpg' />}
        renderContent={() => 'Stevie'}
      />
    </div>

    <h2>Image & Detail</h2>
    <div>
      <Label
        as='a'
        color='blue'
        image
        renderImage={({ styles }) => <img className={styles.__img} src='/assets/images/avatar/small/veronika.jpg' />}
        renderContent={() => 'Veronika'}
        renderDetail={() => 'Friend'}
      />
      <Label
        as='a'
        color='teal'
        image
        renderImage={({ styles }) => <img className={styles.__img} src='/assets/images/avatar/small/jenny.jpg' />}
        renderContent={() => 'Veronika'}
        renderDetail={() => 'Friend'}
      />
      <Label
        as='a'
        color='yellow'
        image
        renderImage={({ styles }) => <img className={styles.__img} src='/assets/images/avatar/small/christian.jpg' />}
        renderContent={() => 'Helen'}
        renderDetail={() => 'Co-worker'}
      />
    </div>
  </Container>
)

export default LabelExampleBasic
