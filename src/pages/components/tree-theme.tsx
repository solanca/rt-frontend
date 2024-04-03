

const TreedefaultProps = {
    style: {
      tree: {
        base: {
         listStyle: 'none',
            background: 'none', 
            margin: 0,
            padding: 0,
            // color: '#fff', // White text color
            fontFamily: 'Arial, sans-serif',
            fontSize: '16px',
        },
        node: {
          base: {
            position: "relative",
          },
          link: {
            cursor: "pointer",
            position: "relative",
            padding: "0px 5px",
            display: "block",
          },
          activeLink: {
            background: "#31363F",
          },
          toggle: {
            base: {
              position: "relative",
              display: "inline-block",
              verticalAlign: "top",
              marginLeft: "-5px",
              height: "24px",
              width: "24px",
            },
            wrapper: {
              position: "absolute",
              top: "50%",
              left: "50%",
              margin: "-7px 0 0 -7px",
              height: "14px",
            },
            height: 14,
            width: 14,
            arrow: {
              // fill: "#9DA5AB",
              strokeWidth: 0,
            },
          },
          header: {
            base: {
              display: "inline-block",
              verticalAlign: "top",
              // color: "#9DA5AB",
            },
            connector: {
              width: "2px",
              height: "12px",
              borderLeft: "solid 2px black",
              borderBottom: "solid 2px black",
              position: "absolute",
              top: "0px",
              left: "-21px",
            },
            title: {
              lineHeight: "24px",
              verticalAlign: "middle",
            },
          },
          subtree: {
            listStyle: "none",
            paddingLeft: "19px",
          },
          loading: {
            // color: "#E2C089",
          },
        },
      },
    },
  };




export default TreedefaultProps; 

/*
const theme = {
    tree: {
        base: {
            listStyle: 'none',
            backgroundColor: '#212529', // Dark background for the tree
            margin: 0,
            padding: 0,
            color: '#fff', // White text color
            fontFamily: 'Arial, sans-serif',
            fontSize: '16px',
        },
        node: {
            base: {
                position: 'relative'
            },
            link: {
                cursor: 'pointer',
                position: 'relative',
                padding: '10px 5px',
                display: 'block',
            },
            activeLink: {
                background: '#343a40', // Slightly lighter dark background for active link
            },
            toggle: {
                base: {
                    position: 'relative',
                    display: 'inline-block',
                    verticalAlign: 'top',
                    marginLeft: '-5px',
                    height: '24px',
                    width: '24px',
                },
                wrapper: {
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    margin: '-7px 0 0 -7px',
                    height: '14px',
                },
                height: 14,
                width: 14,
                arrow: {
                    fill: '#9da5ab', // Arrow color
                    strokeWidth: 0,
                }
            },
            header: {
                base: {
                    display: 'inline-block',
                    verticalAlign: 'top',
                    color: '#fff',
                },
                connector: {
                    width: '2px',
                    height: '12px',
                    borderLeft: 'solid 2px black',
                    borderBottom: 'solid 2px black',
                    position: 'absolute',
                    top: '0px',
                    left: '-21px'
                },
                title: {
                    lineHeight: '24px',
                    verticalAlign: 'middle',
                }
            },
            subtree: {
                listStyle: 'none',
                paddingLeft: '19px',
            },
            loading: {
                color: '#E2C089',
            },
        },
    },
}; */

