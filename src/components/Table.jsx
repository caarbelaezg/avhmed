import React from 'react';

const Table = () => {
  return (
    <table className="table">
      <thead className="table__head">
        <tr className="table__row">
          <th className="table__heading">Fecha examen</th>
          <th className="table__heading">Inscripción y pago hasta</th>
        </tr>
      </thead>
      <tbody className="table__body">
        <tr className="table__row">
          <td className="table__item">Febrero 5 y 6</td>
          <td className="table__item">Enero 15</td>
        </tr>
        <tr className="table__row">
          <td className="table__item">Marzo 14 y 15</td>
          <td className="table__item">Febrero 19</td>
        </tr>
        <tr className="table__row">
          <td className="table__item">Mayo 8 y 9</td>
          <td className="table__item">Abril 16</td>
        </tr>
        <tr className="table__row">
          <td className="table__item">Junio 12 y 13</td>
          <td className="table__item">Mayo 21</td>
        </tr>
        <tr className="table__row">
          <td className="table__item">Agosto 14 y 15</td>
          <td className="table__item">Julio 23</td>
        </tr>
        <tr className="table__row">
          <td className="table__item">Septiembre 11 y 12</td>
          <td className="table__item">Agosto 20</td>
        </tr>
        <tr className="table__row">
          <td className="table__item">Noviembre&nbsp;13 y 14</td>
          <td className="table__item">Octubre 22</td>
        </tr>
        <tr className="table__row">
          <td className="table__item">Diciembre 10 y 11</td>
          <td className="table__item">Noviembre 19</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
