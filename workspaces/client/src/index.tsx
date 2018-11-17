import { tag , WeElement, render, h } from 'omi';
import './top/top-app'

interface RootAppProps {
    name: string;
}

interface RootAppData {
    title: string;
}

interface AbcEvent extends Event {
    detail: {
        title: string;
    }
}


@tag('root-app')
class RootApp extends WeElement<RootAppProps, RootAppData> {
    static get data(): RootAppData {
        return {
            title: 'World'
        }
    }

    onChangeHuman = () => {
        this.data.title = 'Human'
        this.update()
    }

    onMonster = (evt: AbcEvent) => {
        this.data.title = evt.detail.title
        this.update()
    }

    consoleMessage = () => {
        console.log('Meaningless message')
    }

    css() {
        return `
        .container {
            text-align: center;
        }
        .header {
            padding: 20px;
        }
        `
    }

    render(props, data) {
        return (
            <div class="container">
                <header class="header">{this.props.name}</header>
                Hello, {this.data.title}
                <br />
                {
                    this.data.title === 'World' ? (
                        <button onClick={this.onChangeHuman}>Click!</button>
                    ) : (
                        <top-app
                            onClickFromParent={this.consoleMessage}
                            buttonName={'click'}
                            onMonster={this.onMonster}
                        >
                        </top-app>
                    )
            }
            </div>
        )
    }
}

render(<root-app name='Omi Frontend'></root-app>, '#root')
