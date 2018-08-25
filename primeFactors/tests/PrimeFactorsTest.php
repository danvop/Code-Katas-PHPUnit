<?php
use PHPUnit\Framework\TestCase;
use app\PrimeFactors;


class PrimeFactorsTest extends TestCase
{
    public function test_0()
    {
        $primeFactor = new PrimeFactors;
        // $this->assertEquals([], $primeFactor->generate(0));
        // // $this->assertEquals([1], $primeFactor->generate(1));
        $this->assertEquals([2], $primeFactor->generate(2));
        $this->assertEquals([3], $primeFactor->generate(3));
        $this->assertEquals([5], $primeFactor->generate(5));
        $this->assertEquals([7], $primeFactor->generate(7));
        $this->assertEquals([11], $primeFactor->generate(11));

        $this->assertEquals([2,2], $primeFactor->generate(4));
        $this->assertEquals([2,3], $primeFactor->generate(6));
        

    }

}
