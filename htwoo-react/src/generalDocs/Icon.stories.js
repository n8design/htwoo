import { symset } from "../SymbolSet";
import HOOIcon from "../HOOIcon";

const Template = (args) => <HOOIcon {...args} />;
export default {
  title: "Advanced/Built In Icons",
  parameters: {
    docs: {
      description: {
        component: 'A collection of built-in icons available in the HOO component library.',
      },
    },
  },
};

const iconNames = [
  "hoo-icon-arrow-left",
  "hoo-icon-arrow-right",
  "hoo-icon-arrow-up", 
  "hoo-icon-arrow-down",
  "hoo-icon-close",
  "hoo-icon-plus",
  "hoo-icon-minus",
  "hoo-icon-help",
  "hoo-icon-smile",
  "hoo-icon-layers",
  "hoo-icon-pyramic",
  "hoo-icon-cube",
  "hoo-icon-dblpyramid",
  "hoo-icon-ninjacat",
  "hoo-icon-mail",
  "hoo-icon-chat",
  "hoo-icon-mobile",
  "hoo-icon-phone",
  "hoo-icon-search",
  "hoo-icon-download",
  "hoo-icon-ellipses",
  "icon-play-filled",
  "hoo-icon-arrow-upload-regular",
  "hoo-icon-arrow-upload-filled",
  "hoo-icon-delete-regular",
  "hoo-icon-save-regular"
];

export const IconGallery = {
  render: () => {
    symset.initSymbols();
    return (
      <div>
        <h3>Icon Reference</h3>
        <p>Copy any icon name below to use in your components:</p>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #ccc' }}>
              <th style={{ padding: '12px', textAlign: 'left' }}>Icon</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>Name</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>Usage</th>
            </tr>
          </thead>
          <tbody>
            {iconNames.map((iconName) => (
              <tr key={iconName} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '12px' }}>
                  <HOOIcon iconName={iconName} title={iconName} />
                </td>
                <td style={{ padding: '12px' }}>
                  <code 
                    style={{ 
                      cursor: 'pointer',
                      padding: '4px 8px',
                      backgroundColor: '#f5f5f5',
                      borderRadius: '3px'
                    }}
                    onClick={() => navigator.clipboard.writeText(iconName)}
                    title="Click to copy"
                  >
                    {iconName}
                  </code>
                </td>
                <td style={{ padding: '12px', fontSize: '14px' }}>
                  <code>&lt;HOOIcon iconName="{iconName}" /&gt;</code>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  },
  name: "Icon Reference Table",
};

