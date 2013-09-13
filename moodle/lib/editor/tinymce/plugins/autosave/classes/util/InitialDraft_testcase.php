<?php

class InitialDraft_testcase extends basic_testcase {
    public function test_equals() {
        $a = 1 + 2;
        $this->assertEquals(3, $a);
    }
}