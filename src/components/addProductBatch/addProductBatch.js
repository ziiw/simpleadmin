// -----------------------------
// Imports

import React from 'react'
import { connect } from 'react-redux'

import { create } from 'Actions/products'
import styles from './styles.styl'

// -----------------------------
// Core

class AddProductBatch extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      csvText: '',
      products: [],
      delimiter: ';',
      isHeader: false,
      productFields: ["not matched", "reference", "name", "description", "meta", "price", "priceHT", "visuals", "category", "quantity", "isVisible"],
      matching: []
    }
  }

  componentDidMount () {
    // Component appear
    this.animEnter()
  }

  componentWillUnmount () {
    // Before leaving
  }

  animEnter () {

  }

  handleCSVText (e) {
    const row = e.target.value.split('|')
    let products = []
    row.forEach(p => {
      products.push(p.split(this.state.delimiter))
    });
    this.setState({csvText: e.target.value, products})
  }

  handleDelimiterChange (e) {
    this.setState({delimiter: e.target.value})
  }

  handleIsHeader (e) {
    const { isHeader } = this.state
    this.setState({isHeader: !isHeader})
  }

  handleMatch (i, e) {
    const { matching }  = this.state
    matching[i] = e.target.value
    this.setState({matching})
  }

  handleImport () {
    const products = this.state.isHeader ? this.state.products.slice(1) : this.state.products
    let productsMatched = []

    products.forEach((p, i) => {
      let product = {}
      this.state.matching.forEach((m, im) => {
        product[m] = p[im] && p[im].replace(/"/g, '')
      })
      productsMatched.push(product)
    })

    this.props.create(productsMatched).then((p) => {
    }).catch((error) => {
      console.error(error)
    })
  }

  render () {
    let productsHead = this.state.products.slice(0, 1)
    let productsPreview = this.state.products.slice(1, 5)

    return (
      <div className={styles.addProductBatch}>
        <h1>Import from CSV</h1>
        <label>CSV:</label><input type='text' name='csv' onChange={this.handleCSVText.bind(this)} value={this.state.csvText} />
        <label>Delimiter:</label><input type='text' name='csv' onChange={this.handleDelimiterChange.bind(this)} value={this.state.delimiter} />
        <label>Headers included:</label><input type='checkbox' value={this.state.isHeader} onChange={this.handleIsHeader.bind(this)} />
        <p>{this.state.products.length} products</p>
        <table>
          {
            this.state.isHeader && (
              <thead>
                {
                  productsHead.length > 0 && productsHead.map((p) => {
                    return (
                      <tr key={p[0]}>
                        {p.map((data, i) => {
                          return (
                            <th key={data}>
                              {data}
                              <select onChange={this.handleMatch.bind(this, i)} value={this.state.matching[i]}>
                                {this.state.productFields.map((f) => {
                                  return <option value={f}>{f}</option>
                                })}
                              </select>
                            </th>
                          )
                        })}
                      </tr>
                    )
                  })
                }
              </thead>
            )
          }
          <tbody>
            {
              productsPreview.length > 0 && productsPreview.map((p) => {
                return (
                  <tr key={p[0]}>
                    {p.map((data) => {
                      return <td key={data}>{data.replace(/"/g, '')}</td>
                    })}
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        <button onClick={this.handleImport.bind(this)}>Import</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
  create: (products) => dispatch(create(products))
})

AddProductBatch.propTypes = {

}

export default connect(mapStateToProps, mapDispatchToProps)(AddProductBatch)
