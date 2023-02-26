import React from 'react';
import Link from '@docusaurus/Link';
import Spacer from './Spacer';

export default function DemoButton() {
    return <div align="center">
        <Link
            className="button button--primary button--lg"
            to="https://testserver.polo.bembi.dev">
            Check the demo
        </Link>
        <Spacer height={50} />
    </div>;
}