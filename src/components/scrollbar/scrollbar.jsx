import React from 'react'

export default function Scrollbar() {


    const [rangeVal, setRangeVal] = useState(null);
  
    return (
      <div>
          <input
          value={}
          className="input-range"
          orient="vertical"
          type="range"
          step="0.5"
          min="1"
          max="10"
          onInput={this.onInput.bind(this)}
        />
        <h4>The range value is {rangeval}</h4>
      </div>
    );
 
  
  
}
