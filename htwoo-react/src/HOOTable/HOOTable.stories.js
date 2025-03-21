import HOOTable, { IHOOTableProps, HOOTableStyle } from "./HOOTable";

const Template = (args) => (
  <HOOTable {...args}>
    <thead>
      <tr>
        <th>Icon</th>
        <th>Name</th>
        <th>Date Modifed</th>
        <th>Modified by</th>
        <th>File Size</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <img
            alt="image"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJvSURBVDjLhZNNSFRRFIC/N++9eWMzhkl/ZJqFMQMRFvTvImkXSdKiVRAURBRRW1eZA9EqaNOiFlZEtQxKyrJwUS0K+qEQzaTE/AtLHR3HmffuvafFNINDWGdz7z2c7+Nyzr2WiFAIffaMBDW1+B0diAgYgxiDiCDG4DU1QfcLos+fWAXGYUGIUsXiAliUFER+sBAhVCIIVB7QGtEat1oTbcwVz2LMfwR+gPg+oY0bEa3x6sHdUoVdniMUj0M2i/j+PwVJa2QUu7YWp34D7mqNWdNApD6Ks24dpvcL4gfJRQXevbutjI4lGRzCS9iYukPo5dvxVqWQvn6k/2uyoudd60LGEhG43VBGyI4j2ADZ7vDJ8DZ9Img4hw4cvO/3UZ1vH3p7lrWRLwGVneD4y6G84NaOYSoTVYIFIiAGvXI3OWctJv0TW03jZb5gZSfzl9YBpMcIzUwdzQsuVR9EyR3TeCqm6w5jZiZQMz8xsxOYzDTi50AMVngJNgrnUweRbwMPiLpHrOJDOl9Vh6HD7GyO52qa0VPj6MwUJpNC5mYQS/DUJLH3zzRp1cqN8YulTUyODBBzt4X6Ou870z2I8ZHsHJLLYNQ8jusQ6+2exJf9BfivKdAymKZiaVdodhBRAagAjIbgzxp20lwb6Vp0jADYkQO6IpHfuoqInSJUVoE2HrpyRQ1tic2LC9p3lSHWPh2rJfL1MeVP2weWvHp8s3ziNZ49i1q6HrR1YHGBNnt1dG2Z++gC4TdvrqNkK1eHj7ljQ/ujHx6NyPw8BFIiKPmNpKar7P7xb/zyT9P+o7OYvzzYSUt8U+TzxytodixEfgN3CFlQMNAcMgAAAABJRU5ErkJggg&#x3D;&#x3D;"
          />
        </td>
        <td>
          ErosViverra.mp3 just a variable height of everything that is in the
          perfect state
        </td>
        <td>lmaggiore0</td>
        <td>2/4/2021</td>
        <td>30</td>
      </tr>
      <tr>
        <td>
          <img
            alt="image"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAH0SURBVDjLxdPPS9tgGAfwgH/ATmPD0w5jMFa3IXOMFImsOKnbmCUTacW1WZM2Mf1ho6OBrohkIdJfWm9aLKhM6GF4Lz3No/+AMC/PYQXBXL1+95oxh1jGhsgOX/LywvN5n/fN+3IAuKuEuzagVFoO27b1/Z+BcrnUx4otx7FPLWsJvYpIM2SS9H4PqNWqfK1W8VKplHlW/G1zs4G9vS9YXPx4CaDkXOFES4Om4gceUK2WsbZWR72+gtXVFezsbKHVamF7ewtm/sMFgBJZhd6pvm4kDndaAo2KOmt5Gfv7X9HpdNBut9FsNmFZFgPrMHKZc4DkjHyi6KC3MZNehTOuGAH5Xx5ybK/Y3f0Mx3Fg2zaKxSIMw2DjT0inNQ84nogcUUQJHIfZquNT3hzx46DBALizg2o01qEoCqLRKERRRDAYhKYlWRK/AJdCMwH2BY28+Qk8fg667wdXKJjY2FiHaeaRzWYQCk1AEASGzSCZjP/ewtik5r6eBD0dM+nRSMb1j4LuPDnkFhZymJ/PsmLdazmV0jxEkqKsK+niIQ69mKUBwdd9OAx3SADdHtC53FyK12dVXlVlPpF4zytK7OgMyucNyHLs8m+8+2zJHRwG3fId9LxIbNU+OR6zWU57AR5y84FKN+71//EqM2iapfv/HtPf5gcdtKR8VW88PgAAAABJRU5ErkJggg&#x3D;&#x3D;"
          />
        </td>
        <td>FelisUtAt.avi</td>
        <td>djans1</td>
        <td>12/29/2020</td>
        <td>66</td>
      </tr>
      <tr>
        <td>
          <img
            alt="image"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAH2SURBVDjLldPLSxtRFAbwm7ooUheuSn2iQqHtLkZTFGsXShA3LYUi2FJR8VWhuhC6iFAfiEZRE0jUUNDGNKVVxIJUSnGj4APFQhf9D0pCXs1z8tav9wyJjI9ovfAxA3PPb+4Z5jAAjK98HgWP8ooU8dygmlRYElBEIhFvPB4/SiQSuCj8OfR6ve4skgKUVBwMBiEIwkl8Ph88Hg/sdruI2Gw2GAyGUwgtGQG0IRwOIxqNildKIBCA1+uFw+EQgVAoBHqJ0WgUkXMAFadCABX4/X44nc5zLSW/iewUwNs42UD31HeqFZfLJZ7EarWmB85GitBJ6Hu43e7/B6RI76dqtC3I4fY4rwdQYrEYuswVGFxrRMPcPYQiwauBHssjvPlYgc7FcrTMy9G/+hxLBzr0LT+BSpuDrLyMx5cC3eaH+PpzBiuHerHw84EW2o0+mHbH0WlRoXz05tEDtSw7LdDK+6XiqR890Hzvxsh6OwbWmjH0rQNzW8N4+aEKd9+xRFrgxfv7+LKvhWVvEqadccxvj3HkNWa3htBuqUORmv3NfcvkUuBYCjybLUG9Lh+107dRNZGNVwuVmNkcQItZhTLNHWRVsgbpLJTxv0/ghWmHSTF2C02mGig1efj955dAAygFCgi5bJSL+1m4UJ2BzFL2NDn6BVT7D+X3feV2c5mYAAAAAElFTkSuQmCC"
          />
        </td>
        <td>Lacinia.tiff</td>
        <td>wbundy2</td>
        <td>12/14/2020</td>
        <td>53</td>
      </tr>
      <tr>
        <td>
          <img
            alt="image"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJcSURBVDjLjZPfS5NRHMYHQn9AIeRd0za9KEMi7U4oiIZRVFSUVJvbHEyo1GXrB8XsYpDWwjKardKZ3WjKa+p0iTo1jVgs1kusWKQ3XYwhw/3+xdP7fWXvfHEXHng4nIvn+X7OczgSABKPx3N8vkODGaMCTlUFJBJJ9Ta1h8yVbrc78nV5Ed+WXZi8Wo5MJrMt8SFGo3EHwzDKKbMOn3t0mLxSjng8LlI0GkUkEhG0vr6OdDq9ESAmmIOjXr4lIBeSUzgcRiqVEhM4HuqwaG2E46IciUSC152BVRj7V3GLU5t9BW29KzBwIgohQCBY2iAYPy9HMpnkReb+uQDsnPpmA+idCaD5zV8+gKhEBOPtjVh4ocXYORmfTto8tZUzttj8uP7Kz3cQi8WyBQlGz8j4giggdxUSTaS7kzkUCmFtbS3CBRzMEzzQYv65BqOn9wrm1rcraH79B9d6/Giy/ob+5S/on7EIBAIIBoMFOliaA3OyjA+gDnKTOVxMfBnCTasSjU9OQfVIAcv7dhQVFR0WCD7e08DVpcZIXZlQIonMH1x2mAZVGGO78f2fE5ZPelyw7MeB+uJ3IgI3RzCsKBVKJAJqvIGbyPx4CuZnF2h1TmthmdahRl+SzBPcVmPWosLwsXwATafiTtytwgRrw+Y16u1GTVMJthAMHZUim83yL5EjqL1Rig5nA8xOJW82TynFBAaDQTpQtw8jlw9h8IgUfr8fPp8PLMvC6/XCZGvB2c4KPHZq+Mm005nvgL4zSSnbWXu/ardJLd+lKfR1Ky8V91XrS6KETTud6Tv/BxVpxDzfgUo/AAAAAElFTkSuQmCC"
          />
        </td>
        <td>CrasMi.mpeg</td>
        <td>llaurencot3</td>
        <td>6/8/2020</td>
        <td>59</td>
      </tr>
      <tr>
        <td>
          <img
            alt="image"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAIcSURBVDjLjZO/T1NhFIafc+/trdRaYk1KUEEWjXHRaCSik+E/cDHGzYXB2YHRhMRFY1SYmRgYHZ3VxIRFDYMraMC2hrbQXm7v9+M4UGobiOEk7/adN+9zvnNEVQEQkYvAGBDy/6oBm6rqAVBVeia30jRtGmOctVaPU5qmuri4+AaYAgJVHTKYNsa4drutnU6nr1arpY1GQ6vVqlprdXt7W5eWlvomMv/uw6tSofB4p+NOF0biYtc48tEAhXiuTZzh/s1xyuUyWZbhvWdlZeXt3Nzca14sf6zW6nXf7uzrcfq9s6sLy5+1Xq8fQQKmo1ZCvlAoyo+tXT5tPGO09IckM2zWznH3/AJ3rl5ACInjmGazifceay2VSgWASISSBaz3FIs1RnJlPF18vEG1keDVk1lLFEWICM45wvAfYqTKriqje0lGI01x2qFtuuwkKQ26oEKcCwnDEBFBRA6HfmBw8JWwl3o2ti7j8+u0TUKzcYkrY/n+wyAIEJEjSxEglLyH5r7j+tg8T1oVZr8GzE69JIoiFMiM7zeHYUgQBAMJVBGU77+eYoxhLcvIxnNk6w8xxvDo3hqH+yIieO+HEkQB/qe6bPL5g/cckCkDiBhjOJULhlCGDJIkXX2z+m3GeW4UCnExyxxxHIIOLNLk2WP5AaQXTYDb1tovgHCy8lEUzQS9g1LAO+f2AX+SZudcAjgZOOeJ3jkHJ0zggNpfYEZnU63wHeoAAAAASUVORK5CYII&#x3D;"
          />
        </td>
        <td>Ut.mpeg</td>
        <td>eoliphand4</td>
        <td>1/19/2021</td>
        <td>81</td>
      </tr>
      <tr>
        <td>
          <img
            alt="image"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAH/SURBVBgZBcE/jN9zHAfg5/35fn6/6/XqVEmkISHif2KQRsQgLEg4g4TJYrExYTXabJIbDZJOFoNRQssgERNiYJFeOE21QfTuft/v5+V5Konn3r/0xvbu1uutXMApFCikyDCP8euNa/mi/r7+3uX9vROASuLFD765/MnbFx5prc6GSQBIIK7+u3Hxuxv++O34v59++Pnc1/t7x9ChTfXQuk9nf/zT1KooMlgyzHPc3CyefeAWTz7YfTuuns54+Pozb31+21cfvXTcoKrOJJnWU7Nq9GJqTEUVTWE4v7u298R5996/td13dz6GBqGgoRWtSqvSqrQqbSq//3XTPWc2Hj1X3nzqdtNqeg06QEKfKCVVxhJa6RPrNL9ci5MxG+PE0/dtqd5m6JAQ9GoigmqlkEGmxpo2yhiTaFQDHYKBKkoJggxWE6CaWkpaDCRAhzGTMFBIAlrDKH0KKUKUZbAMoMMYkYQQASBAKRV6Y+DUimUO6LAMlpDBABAwwjIIRkixmpr5ZAYdxhwjsf/lywAAAADgsVc/szkeoMM8L5YFuPuuOwEAAMCVg0MZsTmaQYf5eIx5jKCuHBwCAAAA6L2NeRkzdNgcLYc76+mOd174dCdJEwbg1u0OErZXTZWxmuqfZR4H0KEqHz7/7qVXqurxyGkAIYgAAUdjjO97cxH+Bxjp+96ObDbVAAAAAElFTkSuQmCC"
          />
        </td>
        <td>Rhoncus.mov</td>
        <td>epicknett5</td>
        <td>11/20/2020</td>
        <td>47</td>
      </tr>
      <tr>
        <td>
          <img
            alt="image"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAKRSURBVDjLpZNrSNNRGIeVuaSLrW2NCozlSsrCvqifKrG1vyznRDLQMi9TsamsUCzvSWJKC0Ms0/I2hratmVbi3bLIysRZlgh9qFGuCKOF5KaonV9n+yAGokIHHs7hhd/zvofDcQHg8j8sW0wN2FpQJuVNl8u2QC3loEDMtUX7CYrXJDjrx8u6FcYlNVE83KbciOCiNISD9MDNRHaQf3lVQZWMgwYaVNNQqcwBF1dCBbhwlIczfpypVQWlgZvQVZUPS6cag7XpOBckQIZkB9IYEZIPcee02XL3FQU1scKfM98/YOpFFb72XseooRDm9quwmk3QKXdPvdOkrltRUBG9f8A6dBeTw0bY3+ooeufZatLhToLv8IpX2CZrYnsfTtXqVP6YHa7FzFirE/ubJrRk+sM3UHlfwNSsX1YgCNG586WNKZ7SPox9mYYhLwz6PLkTx/n5+G94Bj8BT1x3ni+u3vCPgH/c4OoRbIgXhg5g3GJHowXIGANSXgOJT4G4DkBTXolnMT7oFbPxgNlo7WDYuYuCAxH14ZKTahgHF1A9CqheESj7CZK6CWIfElwrqsRI5hHMtJeBjHfBps/AUJrvn55jbiqnYCR/38JkWzZu1rchvpN2pR0VjwhimglONREYw/fATsOokANZXKDECz/UQeiWsD45BaMFPsTaU4So5AYU99oQ3Qyc1hNEagkiagn66NjE1IKl61fhdlp3I07Be60qx5TjPa9QlMwHxPdDQUdPWELrCSGm6xIBGpq96AIr5bOShW6GZVl8BbM+xeNSbjF/V3hbtTBIMyFi7tlEwc1zIolxLjM0bv5l4l58y/LCZA4bH5Nc8VjuttDFsHLX/G0HIndm045mx9h0n3CEHfW/dpehdpL0UXsAAAAASUVORK5CYII&#x3D;"
          />
        </td>
        <td>SitAmetConsectetuer.png</td>
        <td>ojonke6</td>
        <td>10/11/2020</td>
        <td>21</td>
      </tr>
      <tr>
        <td>
          <img
            alt="image"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJ+SURBVDjLpZNdSJNRGMeFoC50flVXBV1EoF3YdzKYG0u30FTsY9bQnLpqrSg/5uZe29RtimvkxBbCTJupmzpLl8tNxfwObUxTF2RQRNJFGOqFYELx/nt7LwaCzKKLH5zz8Px/POccThCAoP9hy+LNq+nVJZzdULMZULBCIGVGQpye2vhXAqlYVK5OiYIhMQx6Cg0vFDJ2CLLj9kGcJTRuKyAuxKKGCiqokIwmFPmcCOScDkPa0T3ktgJZbDjZa1Liq9uAcZMEGaciIGLuhZC5H4Lj4TDKrgQHFJgzD6yuvn+F5Tct+PbagumnRfjk0OC7z43W6wfX5ptu7QwouC9ielY8Nix5O7E+20bRTq9Xpttgzj3iDXgEvuJZMPt23Wht4UVseBvw4103zfpbK+qJ82BdezDCL7AythSw8+yRPIW1kaN+gaahBRRo69BaKEBvVjxERDNV+4Az5S/Bl7c/ji+whW8SMItcO/LrxyxcdQ/d9GT4I5INQxh0TWBKkoUUjRN6hw/C2jGwS7pJbp7FyJXZd/kFScVWXcbDcTg8i0jQusDTuSHQ92E2Iwnz2WlIrhoAt8yJVMMw1B2zuFw9RPLzGqr8ghlV1K8lpxKEbQa6rnm6Sah3w5aaAlVuMc5VuJBpmoDAOApJ/SSW+0oxWRS94RfMqaPJlQEtBDWjeNS/ACUlkrd4kW8aQEJZD+5aPJA2TKGyy4fEij6sDurgKT5M+gW+5jvENHHo5yXjCOI1vajs9tGUdc7hbGU/PdWfPeeeAyxFB2ZKYzaojG7TK3xulzIk2saYkzfMi1zqouKILrCUz2mYcjtYcjt5LMe0JlaZT3zpkDIC/sZ/4TfeSKfmHj5WOQAAAABJRU5ErkJggg&#x3D;&#x3D;"
          />
        </td>
        <td>Nulla.jpeg</td>
        <td>ipodd7</td>
        <td>6/11/2020</td>
        <td>22</td>
      </tr>
      <tr>
        <td>
          <img
            alt="image"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAKZSURBVDjLjY/Na1R3GIWf+zV3JolJ40iMptZMGrGtVLoQpK66qagLV0VwI3XThS4EQQQ31Y34F7gQFOqqdCMtdGGCRXAhQmskgVSNmYAOmkySmczHvTP33t/vfbsUkyl44OwOD+dxVJXNSWfHJ1X0oSqjKuKpkKjoPMK1/m8rv38wVtUt7cx81sre3VWN51Tbj1Ub05qt3NXmo92vNm99ekStDPifHILuWzB1yOq44TbEyOebtz0BYkGSCk62AdrFdpYgcbFmq+7/PFBs8x+ylftI0kbiBkHxMGLgIx8IbjhGMPglmiwjQR+igjWyFZDM7B1U0XkVGVXBU6uJow6m9S+mNod229i4RWHiYG8FsXLFH7k0Fuw8CdoFG4VZtEj84hqFHUfQ/DJeWAc12IxeAL3sjxwH0wTbBNvGL4yQRet47jzaaWGjFoEzgs16KFgDSISaNmiKJKuQdjBGyA1NovkqNqyxOrtB5S/D4u1ArKcV4ObRKXPDFyPYaAG78RRJV9DkDd7gBDZVktpzNI5Ye9Ygqo1x6MzPhKUDTmd2as/8o+nrT84WJlybKU5QxCuU8Pu/wB/4BtRiMiUc3kdu+y7e/F1l8rtT5Bcf4vxymr7yPcb3Fp24Zn70rREc1yWLF9DuOzRdIRw7gUnvkUVr2HoVUxfyoyU4cfG9+9VdSJvAtxm/ddZmTuW3fYUEw6DjxOtlvHA7tm83+Z0H8IZeEj/7k/4/zpF0lomBVtNDC07Hu/BD4VM3N3jMzQ/g+A5ZWqO1+pJWZeFB4/Xz+vqLpzt8vy+qvqqGbuCSeRGNdaW87OEPuVNO+ddiSQw/iZXvreVrMcyJ1Wmx3Dp4vr4EsHR7uFSby9/ZKK8dISKnBdKg6D0e2J87+x98zpgrhVsXPQAAAABJRU5ErkJggg&#x3D;&#x3D;"
          />
        </td>
        <td>PortaVolutpat.xls</td>
        <td>wsturr8</td>
        <td>5/22/2020</td>
        <td>13</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th>Icon</th>
        <th>Name</th>
        <th>Date Modifed</th>
        <th>Modified by</th>
        <th>File Size</th>
      </tr>
    </tfoot>
  </HOOTable>
);

export default {
  title: "Components/Tables/HOOTable",
  component: HOOTable,
};

export const Normal = {
  render: Template.bind({}),
  name: "Normal",

  args: {
    tableStyle: HOOTableStyle.Normal,
  },
};

export const Compact = {
  render: Template.bind({}),
  name: "Compact",

  args: {
    tableStyle: HOOTableStyle.Compact,
  },
};

export const Extending = {
  render: Template.bind({}),
  name: "Extending",

  args: {
    tableStyle: HOOTableStyle.Normal,

    rootElementAttributes: {
      style: {
        border: "5px solid black",
      },
    },
  },
};
