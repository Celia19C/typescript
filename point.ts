abstract class Point {
    public abstract plus(otherPoint: Point): Point
  }
  
  class Point2D extends Point {
    private x: number
    private y: number
  
    constructor(x: number, y: number) {
      super()
      this.x = x
      this.y = y
    }
  
    plus(otherPoint: Point2D) {
      return new Point2D(this.x + otherPoint.x, this.y + otherPoint.y)
    }
  }
  
  class Point3D extends Point {
    private x: number
    private y: number
    private z: number
  
    constructor(x: number, y: number, z: number) {
      super()
      this.x = x
      this.y = y
      this.z = z
    }
  
    plus(otherPoint: Point3D) {
      return new Point3D(
        this.x + otherPoint.x,
        this.y + otherPoint.y,
        this.z + otherPoint.z
      )
    }
  }
  
  const plus = 'a fastidiarse'
  
  const p1 = new Point2D(1, 2)
  const p2 = new Point2D(2, 1)
  const p3 = p1.plus(p2)
  
  const p3d1 = new Point3D(1, 2, 9)
  const p3d2 = new Point3D(2, 1, 5)
  const p3d3 = p3d1.plus(p3d2)
  
  console.log(p3)
  console.log(p3d3)