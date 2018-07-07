import React from 'react';

export const LintersList = (props) =>
  props.linters.map((item, index) =>
    <tr key={index} className="table-linterhub">
      <td className="cell100"><a href={item.url}>{item.name}</a></td>
      <td className="cell100">{item.description}</td>
      <td className="cell100 hidden-xm">
        {item.languages.map((language, key) =>
          <span className="tagLanguage" key={key}>{language}</span>)}
      </td>
      <td className="cell100 hidden-lg">{item.license}</td>
    </tr>);
