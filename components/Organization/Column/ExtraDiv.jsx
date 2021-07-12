function ExtraDiv({ index, length }) {
    switch (index % 3) {
        case 0:
            if (length == 2) {
                return null;
            } else if (length == 1) {
                return (
                    <div
                        style={{
                            display: "flex",
                            flex: 2,
                        }}
                    />
                );
            } else {
                return null;
            }

        case 1:
            if (length == 3) {
                return null;
            } else if (length == 2) {
                return (
                    <div
                        style={{
                            display: "flex",
                            flex: 1,
                        }}
                    />
                );
            } else if (length == 1) {
                return (
                    <div
                        style={{
                            display: "flex",
                            flex: 2,
                        }}
                    />
                );
            } else {
                return null;
            }

        case 2:
            if (length == 2) {
                return null;
            } else if (length == 1) {
                return (
                    <div
                        style={{
                            display: "flex",
                            flex: 1,
                        }}
                    />
                );
            } else {
                return null;
            }
    }
}

export default ExtraDiv;
