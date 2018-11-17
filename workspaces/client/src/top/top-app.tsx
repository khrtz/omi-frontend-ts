import { tag, WeElement, h } from 'omi';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'top-app': Omi.CustomElementBaseAttributes & {
                buttonName: string;
                onClickFromParent: (e: Event) => void;
                onMonster: (e: Event) => void;
            };
        }
    }
}
interface Props {
    buttonName: string;
    onClickFromParent: () => void;
}

@tag('top-app')
export default class TopApp extends WeElement<Props> {

    onClick = (evt: Event) => {
        // custom event
        this.fire('monster', { title: 'Monster' })
        this.props.onClickFromParent();
        evt.stopPropagation()
    }
    
    css() {
        return `div {
            padding-top: 10px;
        }`
    }

    render() {
        return (
            <div>
                <button onClick={this.onClick}>
                    {this.props.buttonName}
                </button>
            </div>
        )
    }
}