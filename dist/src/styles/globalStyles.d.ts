import { GlobalStyleProps } from '@chakra-ui/theme-tools';

declare const _default: {
    global: (props: GlobalStyleProps) => {
        html: {
            [x: string]: string | {
                fontSize: string;
            };
            fontSize: string;
        };
        'body, *': {
            fontFamily: string;
            margin: string;
            boxSizing: string;
            padding: string;
            fontSize: string;
        };
        'html, body, #root': {
            width: string;
            height: string;
        };
    };
};
export default _default;
